import {Transaction} from "./Transaction";

export interface TransactionRepository {
  create(transaction: Transaction): Promise<Transaction>;
  findById(transactionId: string): Promise<Transaction|null>;
  findByProcessorId(transactionId: string): Promise<Transaction|null>;
}
