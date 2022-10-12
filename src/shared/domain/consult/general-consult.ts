import {Consult} from "./consult";
import {ConsultType} from "./consult-type";
import {Patient} from "../patient/patient";
import {Doctor} from "../doctor/doctor";

export class GeneralConsult extends Consult {
  type(): ConsultType {
    return ConsultType.GENERAL;
  }

  static create(
    patient: Patient,
    doctor: Doctor
  ): GeneralConsult {
    return new GeneralConsult(
      patient,
      doctor
    );
  }
}
