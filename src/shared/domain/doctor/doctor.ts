import {Person} from "../person/person";

export class Doctor {
  private constructor(
    private _doctorId: string|null,
    private _person: Person,
    private _professionalLicenceNo: string
  ) {
  }

  static create(
    person: Person,
    professionalLicenceNo: string
  ): Doctor {
    return new Doctor(
      null,
      person,
      professionalLicenceNo
    );
  }

  static fromPrimitives(
    doctorId: string,
    person: Person,
    professionalLicenceNo: string
  ): Doctor {
    return new Doctor(
      doctorId,
      person,
      professionalLicenceNo
    );
  }

  doctorId(): string|null {
    return this._doctorId;
  }

  person(): Person {
    return this._person;
  }

  professionalLicenceNo(): string {
    return this._professionalLicenceNo;
  }
}
