import {Patient} from "./patient/patient";
import {Doctor} from "./doctor/doctor";
import {Licence} from "./licence";

export class Organization {
  private _doctors: Doctor[] = [];
  private _patients: Patient[] = [];
  private _phone: string | null = null;

  constructor(
    private _id: string,
    private _name: string,
    private _slug: string,
    private _licence: Licence
  ) {
  }

 doctors(): Doctor[] {
    return this._doctors;
  }


 phone(): string | null {
    return this._phone;
  }

 id(): string {
    return this._id;
  }

 name(): string {
    return this._name;
  }

 slug(): string {
    return this._slug;
  }

  public addDoctor(doctor: Doctor): void {
    this._doctors.push(doctor);
  }

  public addPhone(phone: string): void {
    this._phone = phone;
  }

 licence(): Licence {
    return this._licence;
  }

 patients(): Patient[] {
    return this._patients;
  }
}
