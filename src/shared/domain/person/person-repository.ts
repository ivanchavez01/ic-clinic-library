import {Person} from "./person";

export interface PersonRepository {
  create(personDto: Person): Promise<Person>;
  findById(personId: string): Promise<Person|null>;
}
