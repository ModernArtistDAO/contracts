import { BigNumber } from 'bignumber.js';
import { should } from 'chai';
// tslint:disable-next-line:no-var-requires
const { advanceTimeAndBlock, takeSnapshot, revertToSnapshot } = require('ganache-time-traveler');
import { ClassifiedsAdvancedInstance, TestERC20MintableInstance, TestERC721MintableInstance } from '../../../types/truffle-contracts';

const ClassifiedsAdvanced = artifacts.require(
        './drafts/classifieds/ClassifiedsAdvanced.sol',
    ) as Truffle.Contract<ClassifiedsAdvancedInstance>;
const TestERC20Mintable = artifacts.require(
        './test/issuance/TestERC20Mintable.sol',
    ) as Truffle.Contract<TestERC20MintableInstance>;
const TestERC721Mintable = artifacts.require(
        './test/classifieds/TestERC721Mintable.sol',
    ) as Truffle.Contract<TestERC721MintableInstance>;

should();

// tslint:disable-next-line no-var-requires
const { itShouldThrow } = require('./../../utils');

contract('Classifieds', (accounts) => {
    let snapshotId: any;

    const poster = accounts[1];
    const filler = accounts[2];

    let classifiedsAdvanced: ClassifiedsAdvancedInstance;
    let erc20token: TestERC20MintableInstance;
    let erc721token: TestERC721MintableInstance;

    beforeEach(async () => {
        const snapShot = await takeSnapshot();
        snapshotId = snapShot.result;
        classifiedsAdvanced = await ClassifiedsAdvanced.new();
        erc20token = await TestERC20Mintable.new();
        erc721token = await TestERC721Mintable.new();
    });

    afterEach(async  () => {
        await revertToSnapshot(snapshotId);
    });

    /**
     * @test {Classifieds#newAd}
     */
    it('newAd can succefully open a new ad', async () => {
        await erc20token.mint(poster, new BigNumber(1e18));
        await erc20token.approve(classifiedsAdvanced.address, new BigNumber(1e18), { from: poster });
        const creationDateInMin = new BigNumber(
            Math.floor((await web3.eth.getBlock(await web3.eth.getBlockNumber())).timestamp / 60),
        );
        await classifiedsAdvanced.newAd(
            erc20token.address,
            new BigNumber(1e18),
            new BigNumber(Math.floor((new Date()).getTime() / 1000) + 3600),
            false,
            { from: poster },
        );
        assert.equal(
            (await classifiedsAdvanced.adsByHash(
                await classifiedsAdvanced.adsByCreationDateInMin(creationDateInMin, 0))
            )[0],
            poster,
            'Ad was not opened correctly.',
        );
    });

    /**
     * @test {Classifieds#fillAd}
     */
    it('fillAd can succefully fill an ad', async () => {
        await erc20token.mint(poster, new BigNumber(1e18));
        await erc721token.mint(filler, 0);
        await erc20token.approve(classifiedsAdvanced.address, new BigNumber(1e18), { from: poster });
        await erc721token.approve(classifiedsAdvanced.address, 0, { from: filler });
        const creationDateInMin = new BigNumber(
            Math.floor((await web3.eth.getBlock(await web3.eth.getBlockNumber())).timestamp / 60),
        );
        await classifiedsAdvanced.newAd(
            erc20token.address,
            new BigNumber(1e18),
            new BigNumber(Math.floor((new Date()).getTime() / 1000) + 3600),
            false,
            { from: poster },
        );
        await classifiedsAdvanced.fillAd(
            await classifiedsAdvanced.adsByCreationDateInMin(creationDateInMin, 0),
            erc721token.address,
            0,
            true,
            { from: filler },
        );
        assert.equal(
            (
                await classifiedsAdvanced.adsByHash(
                    await classifiedsAdvanced.fillersByAd(
                        await classifiedsAdvanced.adsByCreationDateInMin(creationDateInMin, 0),
                        0,
                    ),
                )
            )[0],
            filler,
            'Ad was not filled correctly',
        );
    });

    /**
     * @test {Classifieds#resolveAd}
     */
    it('resolveAd can succefully resolve an ad', async () => {
        await erc20token.mint(poster, new BigNumber(1e18));
        await erc721token.mint(filler, 0);
        await erc20token.approve(classifiedsAdvanced.address, new BigNumber(1e18), { from: poster });
        await erc721token.approve(classifiedsAdvanced.address, 0, { from: filler });
        const creationDateInMin = new BigNumber(
            Math.floor((await web3.eth.getBlock(await web3.eth.getBlockNumber())).timestamp / 60),
        );
        await classifiedsAdvanced.newAd(
            erc20token.address,
            new BigNumber(1e18),
            new BigNumber(Math.floor((new Date()).getTime() / 1000) + 3600),
            false,
            { from: poster },
        );
        await classifiedsAdvanced.fillAd(
            await classifiedsAdvanced.adsByCreationDateInMin(creationDateInMin, 0),
            erc721token.address,
            0,
            true,
            { from: filler },
        );
        await classifiedsAdvanced.resolveAd(
            await classifiedsAdvanced.adsByCreationDateInMin(creationDateInMin, 0),
            await classifiedsAdvanced.fillersByAd(
                await classifiedsAdvanced.adsByCreationDateInMin(creationDateInMin, 0),
                0,
            ),
            { from: poster },
        );
        assert.equal(
            (await erc20token.balanceOf(filler)).toString(),
            new BigNumber(1e18).toString(),
            'ERC20 tokens not transferred correctly',
        );
        assert.equal(await erc721token.ownerOf(0), poster, 'ERC721 tokens not transferred correctly.');
    });

    /**
     * @test {Classifieds#cancelAd}
     */
    it('cancelAd can succefully cancel an ad', async () => {
        await erc20token.mint(poster, new BigNumber(1e18));
        await erc20token.approve(classifiedsAdvanced.address, new BigNumber(1e18), { from: poster });
        const creationDateInMin = new BigNumber(
            Math.floor((await web3.eth.getBlock(await web3.eth.getBlockNumber())).timestamp / 60),
        );
        await classifiedsAdvanced.newAd(
            erc20token.address,
            new BigNumber(1e18),
            new BigNumber(Math.floor((new Date()).getTime() / 1000) + 3600),
            false,
            { from: poster },
        );
        await classifiedsAdvanced.cancelAd(
            await classifiedsAdvanced.adsByCreationDateInMin(creationDateInMin, 0),
            { from: poster },
        );
        assert.equal(
            (await erc20token.balanceOf(poster)).toString(),
            new BigNumber(1e18).toString(),
            'ERC20 tokens not cancelled correctly',
        );
        assert.equal(
            (await classifiedsAdvanced.adsByHash(
                await classifiedsAdvanced.adsByCreationDateInMin(creationDateInMin, 0),
            ))[5],
            true,
            'Cancellation errored.',
        );
    });

});
