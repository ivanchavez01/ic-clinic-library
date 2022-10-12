export class BloodPressure {
  constructor(
    private _systolic: number,
    private _diastolic: number,
    private _pulse: number
  ) {
  }

  systolic(): number {
    return this._systolic;
  }

  diastolic(): number {
    return this._diastolic;
  }

  pulse(): number {
    return this._pulse;
  }
}
