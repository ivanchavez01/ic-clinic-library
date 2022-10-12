import {Appointment} from "./appointment";

export interface AppointmentRepository {
  findById(appointmentId: string): Promise<Appointment|null>;
  findByPatientId(patientId: string): Promise<Appointment|null>;
  create(appointment:any): Promise<Appointment>;
  update(appointmentId: string, appointment: Appointment): Promise<Appointment>;
}
