import {CommandHandler} from "ic-command-bus/dist/command-bus/command-handler";
import {Account} from "../../../../domain/account/account";
import {Person} from "../../../../domain/person/person";
import {CreateNewAccountCommand} from "./create-new-account-command";
import {PersonRepository} from "../../../../domain/person/person-repository";
import {AuthService} from "../../../../domain/auth/auth-service";
import {AccountRepository} from "../../../../domain/account/account-repository";

export class CreateNewAccountCommandHandler implements CommandHandler {
  constructor(
    private accountRepository: AccountRepository,
    private personRepository: PersonRepository,
    private authService: AuthService
  ) {
  }

  async handle(command: CreateNewAccountCommand): Promise<Account> {
    let user = await this.authService.register(command.auth());

    let person = await this.personRepository.create(
      Person.create(
        command.firstName(),
        command.secondName(),
        command.middleName(),
        command.lastName(),
        null,
        null,
        command.auth().email(),
        user
      )
    );

    // TODO: crear un evento para notificaciones (email, push notification, etc)

    return await this.accountRepository.create(Account.create(person))
  }
}
