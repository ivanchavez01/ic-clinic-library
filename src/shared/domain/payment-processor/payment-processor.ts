import {ChargeDto} from "./charge-dto";
import {Charge} from "./charge";

export interface PaymentProcessor {
  charge(customerId: string, charge: ChargeDto): Promise<Charge>;
}
