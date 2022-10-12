import {Patient} from "../patient/patient";
import {Doctor} from "../doctor/doctor";
import {Licence} from "../licence/licence";
import {CommandProcessor} from "ic-command-bus/dist/command-bus/command-processor";
import {Account} from "../account/account";
import {CreatePatientAccountCommand} from "../../application/patient/commands/create-patient-account-command";
import {CreateDoctorAccountCommand} from "../../application/doctor/services/commands/create-doctor-account-command";
import {Charge} from "../payment-processor/charge";
import {ApplyNewChargeCommand} from "../../application/organization/services/commands/apply-new-charge-command";
import {AuthDto} from "../auth/auth-dto";

export class Organization {
  private _doctors: number = 0;
  private _patients: number = 0;
  private _phone: string | null = null;

  private constructor(
    private _id: string|null,
    private _name: string,
    private _slug: string,
    private _licence: Licence,
    private _admin: Account
  ) {
  }

  public static create(
    name: string,
    slug: string,
    licence: Licence,
    admin: Account
  ): Organization
  {
    return new Organization(
      null,
      name,
      slug,
      licence,
      admin
    );
  }

  doctors(): number {
    return this._doctors;
  }
  admin(): Account {
    return this._admin;
  }
  phone(): string | null {
    return this._phone;
  }

  id(): string | null {
    return this._id;
  }

  name(): string {
    return this._name;
  }

  slug(): string {
    return this._slug;
  }

  public async addDoctor(doctor: Doctor, auth: AuthDto): Promise<Account> {
    let account = await CommandProcessor.execute<Account>(
      new CreateDoctorAccountCommand(
        this,
        doctor,
        auth
      )
    );

    this._doctors++;
    return account;
  }

  public addPhone(phone: string): void {
    this._phone = phone;
  }

  licence(): Licence {
    return this._licence;
  }

  patients(): number {
    return this._patients;
  }

  async addPatient(patient: Patient): Promise<Account> {
    let account = await CommandProcessor.execute<Account>(
      new CreatePatientAccountCommand(
        this,
        patient
      )
    );

    this._patients++;
    return account;
  }

  async applyCharge(charge: Charge): Promise<void>  {
    await CommandProcessor.execute<any>(
      new ApplyNewChargeCommand(
        this,
        "",
        charge
      )
    );
  }
}
