import { Provider } from "src/provider/entities/provider.entity";
import { User } from "src/user/entities/user.entity";
export declare class CreateTicketDto {
    readonly user: User;
    readonly provider: Provider;
}
