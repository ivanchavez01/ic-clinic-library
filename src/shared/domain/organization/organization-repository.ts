import {Organization} from "./organization";

export interface OrganizationRepository {
  findById(id: string): Promise<Organization|null>;
  create(organization: Organization): Promise<Organization>;
}

