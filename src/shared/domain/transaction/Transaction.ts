import {TransactionType} from "./TransactionType";

export class Transaction {
  constructor(
    protected _id: string|null,
    protected _type: TransactionType,
    protected _userId: string,
    protected _amount: number,
    protected _providerReference: string|null
  ) {
  }

  id(): string | null {
    return this._id;
  }

  type(): TransactionType {
    return this._type;
  }

  userId(): string {
    return this._userId;
  }

  amount(): number {
    return this._amount;
  }

  providerReference(): string | null {
    return this._providerReference;
  }
}
