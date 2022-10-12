export class AuthDto {
  constructor(
    private _email: string,
    private _password: string
  ) {
  }

  email(): string {
    return this._email;
  }

  password(): string {
    return this._password;
  }
}
