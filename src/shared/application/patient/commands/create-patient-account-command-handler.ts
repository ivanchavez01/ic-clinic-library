import {CommandHandler} from "ic-command-bus/dist/command-bus/command-handler";
import {PatientRepository} from "../../../../domain/patient/patient-repository";
import {CreatePatientAccountCommand} from "./create-patient-account-command";
import {AccountRepository} from "../../../../domain/account/account-repository";
import {Account} from "../../../../domain/account/account";

export class CreatePatientAccountCommandHandler implements CommandHandler {
  constructor(
    private patientRepository: PatientRepository,
    private accountRepository: AccountRepository
  ) {
  }

  public async handle(command: CreatePatientAccountCommand): Promise<Account> {
    let patient = await this.patientRepository.create(command.patient())
    return await this.accountRepository.create(Account.create(patient.person()))
  }
}

