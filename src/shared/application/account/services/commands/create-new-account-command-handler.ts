import {Command} from "ic-command-bus/dist/command-bus/command";
import {CommandHandler} from "ic-command-bus/dist/command-bus/command-handler";
import {AuthDto} from "../../../../domain/auth/auth-dto";
import {Gender} from "../../../../domain/person/gender";

export class CreateNewAccountCommand extends Command {
  constructor(
    private _firstName: string,
    private _secondName: string|null,
    private _middleName: string,
    private _lastName: string|null,
    private _birthDate: Date | null,
    private _gender: Gender | null,
    private _auth: AuthDto
  ) {
    super();
  }

  firstName(): string {
    return this._firstName;
  }

  secondName(): string | null {
    return this._secondName;
  }

  middleName(): string {
    return this._middleName;
  }

  lastName(): string | null {
    return this._lastName;
  }

  auth(): AuthDto {
    return this._auth;
  }

  birthDate(): Date | null {
    return this._birthDate;
  }

  gender(): Gender | null {
    return this._gender;
  }

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
