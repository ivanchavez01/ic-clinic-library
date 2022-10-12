import {Person} from "../person/person";

export class Patient {
  private _job: string= "";
  private _phone: string= "";
  private _email: string= "";
  private _diseasesDX: string = "";
  private _hereditaryFamilyHistory: string = "";
  private _allergies: string = "";

  private constructor(
    private _patientId: string|null,
    private _person: Person,
    private _maritalStatus: string,
    private _scholarship: string,
    private _nss: string|null
  ) {
  }

  public static create(
    person: Person,
    maritalStatus: string,
    scholarship: string,
    nss: string|null
  ): Patient {
    return new Patient(
      null,
      person,
      maritalStatus,
      scholarship,
      nss
    );
  }

  public static fromPrimitives(
    id: string,
    person: Person,
    maritalStatus: string,
    scholarship: string,
    nss: string|null
  ): Patient {
    return new Patient(
      id,
      person,
      maritalStatus,
      scholarship,
      nss
    );
  }

  job(): string | null {
    return this._job;
  }

  phone(): string | null {
    return this._phone;
  }

  email(): string | null {
    return this._email;
  }

  diseasesDX(): string | null {
    return this._diseasesDX;
  }

  hereditaryFamilyHistory(): string | null {
    return this._hereditaryFamilyHistory;
  }

  allergies(): string | null {
    return this._allergies;
  }

  nss(): string | null {
    return this._nss;
  }

  fullName(): string {
    return this.person().fullName();
  }

  person(): Person {
    return this._person;
  }
  patientId(): string | null {
    return this._patientId;
  }

  maritalStatus(): string {
    return this._maritalStatus;
  }

  scholarship(): string {
    return this._scholarship;
  }

  toPrimitives(): object {
    return {};
  }
}
