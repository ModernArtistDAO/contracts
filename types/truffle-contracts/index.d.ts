/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

/// <reference types="truffle-typings" />
import { BigNumber } from "bignumber.js";

export interface ContextContract extends Truffle.Contract<ContextInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<ContextInstance>;
}

export interface DoubleLinkedListContract
  extends Truffle.Contract<DoubleLinkedListInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<DoubleLinkedListInstance>;
}

export interface IERC20Contract extends Truffle.Contract<IERC20Instance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<IERC20Instance>;
}

export interface IssuanceContract extends Truffle.Contract<IssuanceInstance> {
  "new"(
    _issuanceName: string,
    _issuanceSymbol: string,
    _issuanceDecimals: number | BigNumber | string,
    _acceptedToken: string | BigNumber,
    meta?: Truffle.TransactionDetails
  ): Promise<IssuanceInstance>;
}

export interface IssuanceTokenContract
  extends Truffle.Contract<IssuanceTokenInstance> {
  "new"(
    name: string,
    symbol: string,
    decimals: number | BigNumber | string,
    meta?: Truffle.TransactionDetails
  ): Promise<IssuanceTokenInstance>;
}

export interface LinkedListContract
  extends Truffle.Contract<LinkedListInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<LinkedListInstance>;
}

export interface LinkedListAsArrayContract
  extends Truffle.Contract<LinkedListAsArrayInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<LinkedListAsArrayInstance>;
}

export interface MigrationsContract
  extends Truffle.Contract<MigrationsInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<MigrationsInstance>;
}

export interface OwnableContract extends Truffle.Contract<OwnableInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<OwnableInstance>;
}

export interface RBACContract extends Truffle.Contract<RBACInstance> {
  "new"(
    _root: string | BigNumber,
    meta?: Truffle.TransactionDetails
  ): Promise<RBACInstance>;
}

export interface RBACExtendedContract
  extends Truffle.Contract<RBACExtendedInstance> {
  "new"(
    _root: string | BigNumber,
    meta?: Truffle.TransactionDetails
  ): Promise<RBACExtendedInstance>;
}

export interface StateMachineContract
  extends Truffle.Contract<StateMachineInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<StateMachineInstance>;
}

export interface StringConversionContract
  extends Truffle.Contract<StringConversionInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<StringConversionInstance>;
}

export interface ContextInstance extends Truffle.ContractInstance {}

export interface DoubleLinkedListInstance extends Truffle.ContractInstance {
  tail(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  head(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  idCounter(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  objects(
    arg0: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<[BigNumber, BigNumber, BigNumber, string]>;

  get(
    _id: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<[BigNumber, BigNumber, BigNumber, string]>;

  findIdForData(
    _data: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  addHead: {
    (
      _data: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _data: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      _data: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _data: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  addTail: {
    (
      _data: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _data: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      _data: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _data: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  remove: {
    (
      _id: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _id: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _id: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _id: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  insertAfter: {
    (
      _prevId: number | BigNumber | string,
      _data: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _prevId: number | BigNumber | string,
      _data: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      _prevId: number | BigNumber | string,
      _data: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _prevId: number | BigNumber | string,
      _data: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  insertBefore: {
    (
      _nextId: number | BigNumber | string,
      _data: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _nextId: number | BigNumber | string,
      _data: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      _nextId: number | BigNumber | string,
      _data: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _nextId: number | BigNumber | string,
      _data: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };
}

export interface IERC20Instance extends Truffle.ContractInstance {
  totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  balanceOf(
    account: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  transfer: {
    (
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  allowance(
    owner: string | BigNumber,
    spender: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  approve: {
    (
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  transferFrom: {
    (
      sender: string | BigNumber,
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      sender: string | BigNumber,
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      sender: string | BigNumber,
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      sender: string | BigNumber,
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };
}

export interface IssuanceInstance extends Truffle.ContractInstance {
  currentState(txDetails?: Truffle.TransactionDetails): Promise<string>;

  openingDate(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  issuanceToken(txDetails?: Truffle.TransactionDetails): Promise<string>;

  investors(
    arg0: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  acceptedToken(txDetails?: Truffle.TransactionDetails): Promise<string>;

  issuePrice(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  createTransition: {
    (
      _originState: string | BigNumber,
      _targetState: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _originState: string | BigNumber,
      _targetState: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _originState: string | BigNumber,
      _targetState: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _originState: string | BigNumber,
      _targetState: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  renounceOwnership: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

  isOwner(txDetails?: Truffle.TransactionDetails): Promise<boolean>;

  minInvestment(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  investments(
    arg0: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  closingDate(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  stateExists(
    _state: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  softCap(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  amountRaised(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  createState: {
    (
      _state: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _state: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _state: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _state: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  transferOwnership: {
    (
      newOwner: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      newOwner: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newOwner: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newOwner: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  transition: {
    (
      _targetState: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _targetState: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _targetState: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _targetState: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  SETUP_STATE(txDetails?: Truffle.TransactionDetails): Promise<string>;

  invest: {
    (
      _amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  openIssuance: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  startDistribution: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  sendToNextInvestor: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  cancelInvestment: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  cancelAllInvestments: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  setIssuePrice: {
    (
      _issuePrice: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _issuePrice: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _issuePrice: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _issuePrice: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setOpeningDate: {
    (
      _openingDate: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _openingDate: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _openingDate: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _openingDate: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setClosingDate: {
    (
      _closingDate: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _closingDate: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _closingDate: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _closingDate: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setSoftCap: {
    (
      _softCap: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _softCap: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _softCap: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _softCap: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setMinInvestment: {
    (
      _minInvestment: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _minInvestment: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _minInvestment: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _minInvestment: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };
}

export interface IssuanceTokenInstance extends Truffle.ContractInstance {
  name(txDetails?: Truffle.TransactionDetails): Promise<string>;

  approve: {
    (
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  transferFrom: {
    (
      sender: string | BigNumber,
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      sender: string | BigNumber,
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      sender: string | BigNumber,
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      sender: string | BigNumber,
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  decimals(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  increaseAllowance: {
    (
      spender: string | BigNumber,
      addedValue: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      spender: string | BigNumber,
      addedValue: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      spender: string | BigNumber,
      addedValue: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      spender: string | BigNumber,
      addedValue: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  mint: {
    (
      account: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      account: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      account: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      account: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  balanceOf(
    account: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  symbol(txDetails?: Truffle.TransactionDetails): Promise<string>;

  addMinter: {
    (
      account: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      account: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      account: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      account: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  renounceMinter: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  decreaseAllowance: {
    (
      spender: string | BigNumber,
      subtractedValue: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      spender: string | BigNumber,
      subtractedValue: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      spender: string | BigNumber,
      subtractedValue: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      spender: string | BigNumber,
      subtractedValue: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  transfer: {
    (
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  isMinter(
    account: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  allowance(
    owner: string | BigNumber,
    spender: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;
}

export interface LinkedListInstance extends Truffle.ContractInstance {
  head(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  idCounter(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  objects(
    arg0: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<[BigNumber, BigNumber, string]>;

  get(
    _id: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<[BigNumber, BigNumber, string]>;

  findPrevId(
    _id: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  findTailId(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  findIdForData(
    _data: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  addHead: {
    (
      _data: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _data: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      _data: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _data: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  addTail: {
    (
      _data: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _data: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      _data: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _data: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  remove: {
    (
      _id: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _id: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _id: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _id: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  insertAfter: {
    (
      _prevId: number | BigNumber | string,
      _data: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _prevId: number | BigNumber | string,
      _data: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      _prevId: number | BigNumber | string,
      _data: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _prevId: number | BigNumber | string,
      _data: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  insertBefore: {
    (
      _nextId: number | BigNumber | string,
      _data: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _nextId: number | BigNumber | string,
      _data: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      _nextId: number | BigNumber | string,
      _data: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _nextId: number | BigNumber | string,
      _data: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };
}

export interface LinkedListAsArrayInstance extends Truffle.ContractInstance {
  tail(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  head(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  objects(
    arg0: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  next(
    _id: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<[boolean, BigNumber]>;

  prev(
    _id: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<[boolean, BigNumber]>;

  get(
    _id: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  find(
    _data: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<[boolean, BigNumber]>;

  addHead: {
    (
      _data: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _data: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _data: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _data: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  remove: {
    (
      _id: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _id: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _id: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _id: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };
}

export interface MigrationsInstance extends Truffle.ContractInstance {
  last_completed_migration(
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

  setCompleted: {
    (
      completed: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      completed: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      completed: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      completed: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  upgrade: {
    (
      new_address: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      new_address: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      new_address: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      new_address: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };
}

export interface OwnableInstance extends Truffle.ContractInstance {
  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

  isOwner(txDetails?: Truffle.TransactionDetails): Promise<boolean>;

  renounceOwnership: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  transferOwnership: {
    (
      newOwner: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      newOwner: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newOwner: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newOwner: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };
}

export interface RBACInstance extends Truffle.ContractInstance {
  NO_ROLE(txDetails?: Truffle.TransactionDetails): Promise<string>;

  ROOT_ROLE(txDetails?: Truffle.TransactionDetails): Promise<string>;

  roleExists(
    _roleId: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  hasRole(
    _member: string | BigNumber,
    _roleId: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  addRole: {
    (
      _roleId: string | BigNumber,
      _adminRoleId: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _roleId: string | BigNumber,
      _adminRoleId: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _roleId: string | BigNumber,
      _adminRoleId: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _roleId: string | BigNumber,
      _adminRoleId: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  addMember: {
    (
      _member: string | BigNumber,
      _roleId: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _member: string | BigNumber,
      _roleId: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _member: string | BigNumber,
      _roleId: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _member: string | BigNumber,
      _roleId: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  removeMember: {
    (
      _member: string | BigNumber,
      _roleId: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _member: string | BigNumber,
      _roleId: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _member: string | BigNumber,
      _roleId: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _member: string | BigNumber,
      _roleId: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };
}

export interface RBACExtendedInstance extends Truffle.ContractInstance {
  addMember: {
    (
      _member: string | BigNumber,
      _roleId: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _member: string | BigNumber,
      _roleId: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _member: string | BigNumber,
      _roleId: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _member: string | BigNumber,
      _roleId: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  NO_ROLE(txDetails?: Truffle.TransactionDetails): Promise<string>;

  ROOT_ROLE(txDetails?: Truffle.TransactionDetails): Promise<string>;

  hasRole(
    _member: string | BigNumber,
    _roleId: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  roleExists(
    _roleId: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  removeMember: {
    (
      _member: string | BigNumber,
      _roleId: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _member: string | BigNumber,
      _roleId: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _member: string | BigNumber,
      _roleId: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _member: string | BigNumber,
      _roleId: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  roleList(
    arg0: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  getRoles(txDetails?: Truffle.TransactionDetails): Promise<string[]>;

  rolesForMember(
    _member: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string[]>;

  addRole: {
    (
      _roleId: string | BigNumber,
      _adminRoleId: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _roleId: string | BigNumber,
      _adminRoleId: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _roleId: string | BigNumber,
      _adminRoleId: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _roleId: string | BigNumber,
      _adminRoleId: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };
}

export interface StateMachineInstance extends Truffle.ContractInstance {
  currentState(txDetails?: Truffle.TransactionDetails): Promise<string>;

  SETUP_STATE(txDetails?: Truffle.TransactionDetails): Promise<string>;

  stateExists(
    _state: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  createState: {
    (
      _state: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _state: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _state: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _state: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  createTransition: {
    (
      _originState: string | BigNumber,
      _targetState: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _originState: string | BigNumber,
      _targetState: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _originState: string | BigNumber,
      _targetState: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _originState: string | BigNumber,
      _targetState: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  transition: {
    (
      _targetState: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _targetState: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _targetState: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _targetState: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };
}

export interface StringConversionInstance extends Truffle.ContractInstance {
  byteAt(
    _data: string | BigNumber,
    _at: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  resizeBytes(
    _bytes: string,
    _length: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  bytes32ToString(
    _data: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  stringToBytes32(
    _data: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;
}
