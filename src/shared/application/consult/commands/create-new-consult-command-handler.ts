import {Command} from "ic-command-bus/dist/command-bus/command";
import {CommandHandler} from "ic-command-bus/dist/command-bus/command-handler";
import {Consult} from "../../../domain/consult/consult";
import {Doctor} from "../../../domain/doctor/doctor";
import {Patient} from "../../../domain/patient/patient";
import {Organization} from "../../../domain/organization/organization";

export class CreateNewConsultCommand extends Command {
  constructor(
    private _organization: Organization,
    private _consult: Consult,
    private _doctor: Doctor,
    private _patient: Patient,
    private _date: Date,
    private _time: number
  ) {
    super();
  }

  organization(): Organization {
    return this._organization;
  }

  consult(): Consult {
    return this._consult;
  }

  doctor(): Doctor {
    return this._doctor;
  }

  patient(): Patient {
    return this._patient;
  }

  time(): number {
    return this._time;
  }

  date(): Date {
    return this._date;
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
