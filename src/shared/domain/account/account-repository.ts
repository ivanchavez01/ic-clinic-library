import {Account} from "./account";

export interface AccountRepository {
  findById(id: string): Promise<Account|null>;
  findByOrganizationId(organizationId: string): Promise<Account|null>;
  create(account: Account): Promise<Account>;
}

