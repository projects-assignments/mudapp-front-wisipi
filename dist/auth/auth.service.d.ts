import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/entities/user.entity';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    verifyPassword(password: string, hash: string): Promise<boolean>;
    validateUser(username: string, pass: string): Promise<{
        id: number;
        username: string;
        email: string;
        name: string;
        lastname: string;
        admin: boolean;
        tickets: import("../ticket/entities/ticket.entity").Ticket[];
    }>;
    signin(user: User): Promise<{
        access_token: string;
    }>;
}
