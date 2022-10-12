export class PatientPhysical {
  constructor(
    private _height: number,
    private _weight: number
  ) {
  }

  height(): number {
    return this._height;
  }

  weight(): number {
    return this._weight;
  }
}
