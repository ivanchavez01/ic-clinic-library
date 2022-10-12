import {Patient} from "./patient";
import {Doctor} from "./doctor";

export abstract class Consult {
  private bloodPressureSamples: BloodPressureSample|null = null;
  private patientPhysicalSample: PatientPhysicalSample|null = null;
  private reasonForConsultation: string|null = null;
  private historial: string|null = null;

  protected constructor(
    private _patient: Patient,
    private _doctor: Doctor
  ) {
  }
  // @ts-ignore
  public abstract static createFromAppointment(appointment: Appointment): Consult;

  public addReasonForConsultation(reasonForConsultation: string): void
  {
    this.reasonForConsultation = reasonForConsultation;
  }

  public addBloodPressureSample(bloodPressureSamples: BloodPressureSample): void
  {
    this.bloodPressureSamples = bloodPressureSamples;
  }

  public addPatientPhysicalSample(patientPhysicalSample: PatientPhysicalSample): void
  {
    this.patientPhysicalSample = patientPhysicalSample;
  }

  patient(): Patient {
    return this._patient;
  }

  doctor(): Doctor {
    return this._doctor;
  }
}
