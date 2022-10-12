import {CommandHandler} from "ic-command-bus/dist/command-bus/command-handler";
import {ApplyNewChargeCommand} from "./apply-new-charge-command";
import {TransactionRepository} from "../../../../domain/transaction/transaction-repository";
import {Transaction} from "../../../../domain/transaction/Transaction";

export class ApplyNewChargeCommandHandler implements CommandHandler {
  constructor(
    private transactionRepository: TransactionRepository
  ) {
  }
  handle(command: ApplyNewChargeCommand): Promise<Transaction> {
    return this.transactionRepository.create(command.charge())
  }
}
