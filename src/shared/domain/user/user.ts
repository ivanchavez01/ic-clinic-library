export class User {
  constructor(
    private _email: string,
    private _emailVerified: boolean,
    private _phoneNumber: string|null = null,
    private _phoneNumberVerified: boolean = false,
    private _roles: string[] = []
  ) {
  }

  email(): string {
    return this._email;
  }

  emailVerified(): boolean {
    return this._emailVerified;
  }

  phoneNumber(): string | null {
    return this._phoneNumber;
  }

  phoneNumberVerified(): boolean {
    return this._phoneNumberVerified;
  }

  roles(): string[] {
    return this._roles;
  }
}
