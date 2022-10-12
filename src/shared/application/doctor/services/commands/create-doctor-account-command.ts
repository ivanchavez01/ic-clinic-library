import {Command} from "ic-command-bus/dist/command-bus/command";
import {Organization} from "../../../../domain/organization/organization";
import {CommandHandler} from "ic-command-bus/dist/command-bus/command-handler";
import {App} from "ic-command-bus/dist/dependency-injection/app";
import {CreateDoctorAccountCommandHandler} from "./create-doctor-account-command-handler";
import {Doctor} from "../../../../domain/doctor/doctor";
import {DoctorRepository} from "../../../../domain/doctor/doctor-repository";
import {AuthDto} from "../../../../domain/auth/auth-dto";

export class CreateDoctorAccountCommand implements Command {
  constructor(
    private _organization: Organization,
    private _doctor: Doctor,
    private _auth: AuthDto
  ) {
  }
  organization(): Organization {
    return this._organization;
  }

  doctor(): Doctor {
    return this._doctor;
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
    return new CreateDoctorAccountCommandHandler(
      App.instance().make<DoctorRepository>('DoctorRepository')
    );
  }
}
