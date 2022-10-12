import {Licence} from "./licence";

export interface LicenceRepository {
  findById(licenceId: string): Promise<Licence|null>;
  create(licence: Licence): Promise<Licence>;
  deleteById(licenceId: string): Promise<boolean>;
}
