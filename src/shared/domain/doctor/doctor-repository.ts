import {Doctor} from "./doctor";

export interface DoctorRepository {
  create(doctor: Doctor): Promise<Doctor>;
  findById(doctorId: string): Promise<Doctor|null>;
}
