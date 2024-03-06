import { ProviderService } from './provider.service';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { Provider } from './entities/provider.entity';
export declare class ProviderController {
    private readonly providerService;
    constructor(providerService: ProviderService);
    create(createProviderDto: CreateProviderDto): Promise<Provider>;
    findAll(limit: string): Promise<Provider[]>;
    findProvider(providerId: string): Promise<Provider>;
    updateProvider(providerId: number, provider: UpdateProviderDto): Promise<{
        message: string;
    }>;
    removeProvider(providerId: number): Promise<{
        message: string;
    }>;
}
