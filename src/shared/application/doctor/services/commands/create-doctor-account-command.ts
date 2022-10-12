import {Command} from "ic-command-bus/dist/command-bus/command";
import {Organization} from "../../../../domain/organization/organization";
import {Patient} from "../../../../domain/patient/patient";
import {CommandHandler} from "ic-command-bus/dist/command-bus/command-handler";
import {CreatePatientAccountCommandHandler} from "./create-patient-account-command-handler";
import {App} from "ic-command-bus/dist/dependency-injection/app";
import {PatientRepository} from "../../../../domain/patient/patient-repository";
import {OrganizationRepository} from "../../../../domain/organization/organization-repository";

export class CreatePatientAccountCommand implements Command {
  constructor(
    private _organization: Organization,
    private _patient: Patient
  ) {
  }
  organization(): Organization {
    return this._organization;
  }

  patient(): Patient {
    return this._patient;
  }

  auditLog(): string {
    return "";
  }
  auditable(): boolean {
    return false;
  }

  handler(): CommandHandler {
    return new CreatePatientAccountCommandHandler(
      App.instance().make<PatientRepository>('PatientRepository'),
      App.instance().make<OrganizationRepository>('OrganizationRepository'),
    );
  }
}
