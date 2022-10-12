import {Transaction} from "../transaction/Transaction";
import {TransactionType} from "../transaction/TransactionType";

export class Charge extends Transaction {
  constructor(
    _id: string|null,
    _userId: string,
    _amount: number,
    _providerReference: string|null
  ) {
    super(_id, TransactionType.OUTCOME, _userId, _amount, _providerReference);
  }
}
