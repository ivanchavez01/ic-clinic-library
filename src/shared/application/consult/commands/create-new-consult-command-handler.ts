import {CommandHandler} from "ic-command-bus/dist/command-bus/command-handler";
import {CreateNewConsultCommand} from "./create-new-consult-command";
import {ConsultRepository} from "../../../domain/consult/consult-repository";
import {ConsultType} from "../../../domain/consult/consult-type";
import {GeneralConsult} from "../../../domain/consult/general-consult";
import {Consult} from "../../../domain/consult/consult";
import {AppointmentRepository} from "../../../domain/appointment/appointment-repository";

export class CreateNewConsultCommandHandler implements CommandHandler {
  constructor(
    private consultRepository: ConsultRepository,
    private appointmentRepository: AppointmentRepository
  ) {
  }

  public async handle(command: CreateNewConsultCommand) {
    let appointment = await this.appointmentRepository.findById(command.appointment().appointmentId());
    if (appointment === null) {
      throw new Error("Appointment not found");
    }

    let consult: Consult|null = null;

    switch (command.appointment().appointmentType()) {
      case ConsultType.GENERAL:
        consult = GeneralConsult.create(
          appointment.patient(),
          appointment.doctor()
        );
        break;
    }

    if (consult === null) {
      throw new Error("Consult type is not valid");
    }

    return await this.consultRepository.create(consult)
  }
}
