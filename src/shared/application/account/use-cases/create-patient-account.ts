import {Organization} from "../../../domain/organization/organization";
import {Patient} from "../../../domain/patient/patient";
import {Person} from "../../../domain/person/person";
import {Gender} from "../../../domain/person/gender";

export class CreatePatientAccount {
  async execute(
    organization: Organization,
    firstName: string,
    secondName: string | null,
    middleName: string,
    lastName: string | null,
    birthDate: Date,
    gender: Gender,
    maritalStatus: string,
    scholarship: string,
    nss: string | null,
    email: string
  ): Promise<boolean> {
    let person = Person.create(
      firstName,
      secondName,
      middleName,
      lastName,
      birthDate,
      gender,
      email,
      null
    );

    await organization.addPatient(
      Patient.create(
        person,
        maritalStatus,
        scholarship,
        nss
      )
    );
    return Promise.resolve(true);
  }
}

