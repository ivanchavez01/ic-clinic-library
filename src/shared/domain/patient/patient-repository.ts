import {Patient} from "./patient";

export interface PatientRepository {
  create(patient: Patient): Promise<Patient>;
  findByEmail(email: string): Promise<Patient|null>;
  findByOrganizationId(organizationId: string): Promise<Patient[]>;
  findById(patientId: string): Promise<Patient|null>;
}
