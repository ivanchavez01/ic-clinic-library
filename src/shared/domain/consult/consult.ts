import {Patient} from "../patient/patient";
import {Doctor} from "../doctor/doctor";
import {BloodPressure} from "./samples/blood-pressure";
import {PatientPhysical} from "./samples/patient-physical";
import {Appointment} from "../appointment/appointment";
import {ConsultType} from "./consult-type";
import {CreateNewConsultCommand} from "../../application/consult/commands/create-new-consult-command";
import {CommandProcessor} from "ic-command-bus/dist/command-bus/command-processor";

export abstract class Consult {
  private _bloodPressureSamples: BloodPressure | null = null;
  private _patientPhysicalSample: PatientPhysical | null = null;
  private _reasonForConsultation: string | null = null;
  private _consultationStartDate: Date | null = null;
  private _consultationEndDate: Date | null = null;
  private _status: ConsultStatus | null = null;

  protected constructor(
    private _patient: Patient,
    private _doctor: Doctor
  ) {
    this._consultationEndDate = new Date();
    this._status = ConsultStatus.OPENED;
  }

  abstract type(): ConsultType;

  patient(): Patient {
    return this._patient;
  }

  doctor(): Doctor {
    return this._doctor;
  }

  bloodPressureSamples(): BloodPressure | null {
    return this._bloodPressureSamples;
  }

  patientPhysicalSample(): PatientPhysical | null {
    return this._patientPhysicalSample;
  }

  reasonForConsultation(): string | null {
    return this._reasonForConsultation;
  }

  consultationStartDate(): Date | null {
    return this._consultationStartDate;
  }

  consultationEndDate(): Date | null {
    return this._consultationEndDate;
  }

  status(): ConsultStatus|null {
    return this._status;
  }

  static async createFromAppointment(appointment: Appointment): Promise<Consult> {
    return await CommandProcessor.execute<Consult>(
      new CreateNewConsultCommand(
        appointment,
        new Date()
      )
    )
  }

  public closeConsultation() {
    this._consultationEndDate = new Date();
    this._status = ConsultStatus.CLOSED;
  }

  public addReasonForConsultation(reasonForConsultation: string): void {
    this._reasonForConsultation = reasonForConsultation;
  }

  public addBloodPressureSample(bloodPressureSamples: BloodPressure): void {
    this._bloodPressureSamples = bloodPressureSamples;
  }

  public addPatientPhysicalSample(patientPhysicalSample: PatientPhysical): void {
    this._patientPhysicalSample = patientPhysicalSample;
  }
}
