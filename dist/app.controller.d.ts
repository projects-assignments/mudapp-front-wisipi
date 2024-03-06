import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { Request } from 'express';
export declare class AppController {
    private readonly appService;
    private authService;
    constructor(appService: AppService, authService: AuthService);
    signin(req: Request): Promise<{
        access_token: string;
    }>;
}
