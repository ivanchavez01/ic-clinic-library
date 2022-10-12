import {User} from "../user/user";
import {AuthDto} from "./auth-dto";

export interface AuthService {
  register(authDto: AuthDto): Promise<User>;
  login(email: string, password: string): Promise<User|null>;
}
