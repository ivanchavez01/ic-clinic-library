import {Organization} from "../../../domain/organization/organization";
import {CreateNewOrganizationCommand} from "./commands/create-new-organization-command";
import {CommandProcessor} from "ic-command-bus/dist/command-bus/command-processor";
import {AuthDto} from "../../../domain/auth/auth-dto";

export class OrganizationService {
  constructor() {
  }
  createAccount(
    organizationName: string,
    licenceId: string,
    firstName: string,
    secondName: string | null,
    middleName: string,
    lastName: string | null,
    auth: AuthDto,
  ): Promise<Organization> {
    return CommandProcessor.execute(
      new CreateNewOrganizationCommand(
        organizationName,
        licenceId,
        firstName,
        secondName,
        middleName,
        lastName,
        auth
      )
    );
  }
}
