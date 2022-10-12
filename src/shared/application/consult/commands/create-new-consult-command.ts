import {Command} from "ic-command-bus/dist/command-bus/command";
import {CommandHandler} from "ic-command-bus/dist/command-bus/command-handler";
import {CreateNewConsultCommandHandler} from "./create-new-consult-command-handler";
import {Appointment} from "../../../domain/appointment/appointment";
import {App} from "ic-command-bus/dist/dependency-injection/app";
import {ConsultRepository} from "../../../domain/consult/consult-repository";
import {AppointmentRepository} from "../../../domain/appointment/appointment-repository";

export class CreateNewConsultCommand extends Command {
  constructor(
    private _appointment: Appointment,
    private _consultStartDate: Date,
  ) {
    super();
  }

  appointment(): Appointment {
    return this._appointment;
  }

  consultStartDate(): Date {
    return this._consultStartDate;
  }

  auditLog(): string {
    return "";
  }

  auditable(): boolean {
    return false;
  }

  handler(): CommandHandler {
    return new CreateNewConsultCommandHandler(
      App.instance().make<ConsultRepository>('ConsultRepository'),
      App.instance().make<AppointmentRepository>('AppointmentRepository')
    );
  }

}
