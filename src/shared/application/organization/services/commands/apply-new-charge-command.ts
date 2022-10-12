import {Command} from "ic-command-bus/dist/command-bus/command";
import {CommandHandler} from "ic-command-bus/dist/command-bus/command-handler";

export class ApplyNewCharge extends Command {
  auditLog(): string {
    return "";
  }

  auditable(): boolean {
    return false;
  }

  handler(): CommandHandler {
    return undefined;
  }

}
