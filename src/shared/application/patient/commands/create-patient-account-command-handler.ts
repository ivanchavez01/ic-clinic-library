import {CommandHandler} from "ic-command-bus/dist/command-bus/command-handler";
import {PatientRepository} from "../../../domain/patient/patient-repository";
import {CreatePatientAccountCommand} from "./create-patient-account-command";
import {Account} from "../../../domain/account/account";
import {CommandProcessor} from "ic-command-bus/dist/command-bus/command-processor";
import {CreateNewAccountCommand} from "../../account/services/commands/create-new-account-command";

export class CreatePatientAccountCommandHandler implements CommandHandler {
  constructor(
    private patientRepository: PatientRepository
  ) {
  }

  public async handle(command: CreatePatientAccountCommand): Promise<Account> {
    let patient = await this.patientRepository.create(command.patient())
    return await CommandProcessor.execute<Account>(
      new CreateNewAccountCommand(
        patient.person().firstName(),
        patient.person().secondName(),
        patient.person().middleName(),
        patient.person().lastName(),
        patient.person().birthDate(),
        patient.person().gender(),
        null
      )
    );
  }
}

