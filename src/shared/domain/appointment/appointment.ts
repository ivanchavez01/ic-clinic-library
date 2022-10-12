import {Patient} from "../patient/patient";
import {Doctor} from "../doctor/doctor";
import {AppointmentType} from "./appoitment-type";
import {ConsultType} from "../consult/consult-type";

export abstract class Appointment {
  protected _type: AppointmentType|null = null;

  protected constructor(
    private _appointmentId: string,
    private _appointmentType: ConsultType,
    private _patient: Patient,
    private _doctor: Doctor,
    private _start: Date,
    private _scheduleStartTime: string,
    private _scheduleEndTime: string
  ) {
  }

  abstract getEndDate(): Date;

  appointmentId(): string {
    return this._appointmentId;
  }

  appointmentType(): ConsultType {
    return this._appointmentType;
  }

  scheduleStartTime(): string {
    return this._scheduleStartTime;
  }

  scheduleEndTime(): string {
    return this._scheduleEndTime;
  }

  patient(): Patient {
    return this._patient;
  }

  doctor(): Doctor {
    return this._doctor;
  }

  start(): Date {
    return this._start;
  }

  type(): AppointmentType|null {
    return this._type;
  }
}
