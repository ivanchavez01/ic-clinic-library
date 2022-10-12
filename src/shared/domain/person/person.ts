import {Gender} from "./gender";
import moment from "moment";

export class Person {
  private _address: string | null = null;
  private constructor(
    private _personId: string|null,
    private _firstName: string,
    private _secondName: string | null,
    private _middleName: string,
    private _lastName: string | null,
    private _birthDate: Date | null,
    private _gender: Gender | null,
    private _userId: string | null,
  ) {
  }

  public static create(
    firstName: string,
    secondName: string | null,
    middleName: string,
    lastName: string | null,
    birthDate: Date | null,
    gender: Gender | null,
    userId: string | null,
  ): Person {
    return new Person(
      null,
      firstName,
      secondName,
      middleName,
      lastName,
      birthDate,
      gender,
      userId
    );
  }

  public static fromPrimitives(
    id: string,
    firstName: string,
    secondName: string | null,
    middleName: string,
    lastName: string | null,
    birthDate: Date | null,
    gender: Gender | null,
    userId: string | null,
  ): Person {
    return new Person(
      id,
      firstName,
      secondName,
      middleName,
      lastName,
      birthDate,
      gender,
      userId
    );
  }

  personId(): string | null {
    return this._personId;
  }

  address(): string | null {
    return this._address;
  }

  firstName(): string {
    return this._firstName;
  }

  secondName(): string | null {
    return this._secondName;
  }

  middleName(): string {
    return this._middleName;
  }

  lastName(): string | null {
    return this._lastName;
  }

  birthDate(): Date | null {
    return this._birthDate;
  }

  gender(): Gender | null {
    return this._gender;
  }

  userId(): string | null {
    return this._userId;
  }

  public addAddress(address: string): void {
    this._address = address;
  }

  age(): number {
    return parseInt(moment()
      .diff(moment(this._birthDate), 'years')
      .toFixed(0));
  }

  public fullName(): string {
    return [this._firstName, this._secondName, this._middleName, this._lastName]
      .join(" ")
  }

  public birthDateFormatted(): string {
    return moment(this.birthDate()?.getDate()).format("D-M-Y")
  }
}
