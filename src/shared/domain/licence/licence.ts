export class Licence {
  constructor(
    private _id: string,
    private _name: string,
    private _cost: number,
    private _periodicity: string,
    private _patients: number,
    private _doctors: number,
    private _consults: number,
    private _appointments: number,
    private _branches: number,
    private _isActive: boolean
  ) {
  }

  id(): string {
    return this._id;
  }

  name(): string {
    return this._name;
  }

  cost(): number {
    return this._cost;
  }

  patients(): number {
    return this._patients;
  }

  doctors(): number {
    return this._doctors;
  }

  branches(): number {
    return this._branches;
  }

  isActive(): boolean {
    return this._isActive;
  }

  periodicity(): string {
    return this._periodicity;
  }

  consults(): number {
    return this._consults;
  }

  appointments(): number {
    return this._appointments;
  }
}
