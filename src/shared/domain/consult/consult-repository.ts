import {Consult} from "./consult";

export interface ConsultRepository {
  findById(consultId: string): Promise<Consult|null>;
  findByPatientId(patientId: string): Promise<Consult[]>;
  create(consult: Consult): Promise<Consult>;
}
