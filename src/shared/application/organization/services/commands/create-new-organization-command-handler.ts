import {CommandHandler} from "ic-command-bus/dist/command-bus/command-handler";
import {OrganizationRepository} from "../../../../domain/organization/organization-repository";
import {CreateNewOrganizationCommand} from "./create-new-organization-command";
import {Organization} from "../../../../domain/organization/organization";
import {LicenceRepository} from "../../../../domain/licence/licence-repository";
import {LicenceException} from "../../../../domain/licence/licence-exception";
import {CommandProcessor} from "ic-command-bus/dist/command-bus/command-processor";
import {CreateNewAccountCommand} from "../../../account/services/commands/create-new-account-command";
import {Account} from "../../../../domain/account/account";
import {PaymentProcessor} from "../../../../domain/payment-processor/payment-processor";
import {ChargeDto} from "../../../../domain/payment-processor/charge-dto";

export class CreateNewOrganizationCommandHandler implements CommandHandler {
  constructor(
    private organizationRepository: OrganizationRepository,
    private licenceRepository: LicenceRepository,
    private paymentProcessor: PaymentProcessor
  ) {
  }

  public async handle(command: CreateNewOrganizationCommand) {
    let licence = await this.licenceRepository.findById(command.licenceId());
    if (licence === null) {
      throw new LicenceException("Licence not found");
    }

    let charge = null;
    if (licence.cost() > 0) {
      charge = await this.paymentProcessor.charge("", new ChargeDto(licence.cost()))
    }

    let account = await CommandProcessor.execute<Account>(
      new CreateNewAccountCommand(
        command.firstName(),
        command.secondName(),
        command.middleName(),
        command.lastName(),
        null,
        null,
        command.auth()
      )
    );

    let organization = await this.organizationRepository.create(
      Organization.create(
        command.organizationName(),
        command.organizationName(),
        licence,
        account
      )
    )
    if (charge !== null) {
      await organization.applyCharge(charge);
    }
  }
}
