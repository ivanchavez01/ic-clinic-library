import {Command} from "ic-command-bus/dist/command-bus/command";
import {CommandHandler} from "ic-command-bus/dist/command-bus/command-handler";
import {CreateNewOrganizationCommandHandler} from "./create-new-organization-command-handler";
import {AuthDto} from "../../../../domain/auth/auth-dto";
import {OrganizationRepository} from "../../../../domain/organization/organization-repository";
import {LicenceRepository} from "../../../../domain/licence/licence-repository";
import {PersonRepository} from "../../../../domain/person/person-repository";
import {AuthService} from "../../../../domain/auth/auth-service";
import {App} from "ic-command-bus/dist/dependency-injection/app";

export class CreateNewOrganizationCommand extends Command {
  constructor(
    private _organizationName: string,
    private _licenceId: string,
    private _firstName: string,
    private _secondName: string|null,
    private _middleName: string,
    private _lastName: string|null,
    private _auth: AuthDto
  ) {
    super();
  }

  organizationName(): string {
    return this._organizationName;
  }

  licenceId(): string {
    return this._licenceId;
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

  auditLog(): string {
    return "";
  }

  auditable(): boolean {
    return false;
  }

  handler(): CommandHandler {
    return new CreateNewOrganizationCommandHandler(
      App.instance().make<OrganizationRepository>('OrganizationRepository'),
      App.instance().make<LicenceRepository>('LicenceRepository'),
      App.instance().make<PersonRepository>('PersonRepository'),
      App.instance().make<AuthService>('AuthService')
    );
  }

}
