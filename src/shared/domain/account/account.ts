import {Person} from "../person/person";

export class Account {
  private constructor(
    private _id: string|null,
    private _person: Person,
  ) {
  }

  static create(
    person: Person
  ): Account {
    return new Account(
      null,
      person
    )
  }

  id(): string | null {
    return this._id;
  }

  person(): Person {
    return this._person;
  }
}
