export class ChargeDto {
  constructor(
    private _amount: number
  ) {
  }

  amount(): number {
    return this._amount;
  }
}
