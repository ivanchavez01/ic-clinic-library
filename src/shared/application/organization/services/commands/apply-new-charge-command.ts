import {Command} from "ic-command-bus/dist/command-bus/command";
import {CommandHandler} from "ic-command-bus/dist/command-bus/command-handler";
import {ApplyNewChargeCommandHandler} from "./apply-new-charge-command-handler";
import {App} from "ic-command-bus/dist/dependency-injection/app";
import {Organization} from "../../../../domain/organization/organization";
import {Charge} from "../../../../domain/payment-processor/charge";
import {TransactionRepository} from "../../../../domain/transaction/transaction-repository";

export class ApplyNewChargeCommand extends Command {
  constructor(
    private _organization: Organization,
    private _customerId: string,
    private _charge: Charge
  ) {
    super();
  }

  customerId(): string {
    return this._customerId;
  }

  charge(): Charge {
    return this._charge;
  }

  organization(): Organization {
    return this._organization;
  }

  auditLog(): string {
    return "";
  }

  auditable(): boolean {
    return false;
  }

  handler(): CommandHandler {
    return new ApplyNewChargeCommandHandler(
      App.instance().make<TransactionRepository>('TransactionRepository'),
    );
  }

}
