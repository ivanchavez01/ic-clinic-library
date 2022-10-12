import {CommandHandler} from "ic-command-bus/dist/command-bus/command-handler"
import {Account} from "../../../../domain/account/account";
import {CreateDoctorAccountCommand} from "./create-doctor-account-command";
import {DoctorRepository} from "../../../../domain/doctor/doctor-repository";
import {CommandProcessor} from "ic-command-bus/dist/command-bus/command-processor";
import {CreateNewAccountCommand} from "../../../account/services/commands/create-new-account-command";

export class CreateDoctorAccountCommandHandler implements CommandHandler {
  constructor(
    private doctorRepository: DoctorRepository
  ) {
  }

  public async handle(command: CreateDoctorAccountCommand): Promise<Account> {
    let doctor = await this.doctorRepository.create(command.doctor())
    return await CommandProcessor.execute<Account>(
      new CreateNewAccountCommand(
        doctor.person().firstName(),
        doctor.person().secondName(),
        doctor.person().middleName(),
        doctor.person().lastName(),
        doctor.person().birthDate(),
        doctor.person().gender(),
        command.auth()
      )
    );
  }
}

