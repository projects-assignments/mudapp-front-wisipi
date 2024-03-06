import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { Provider } from './entities/provider.entity';
import { Repository } from 'typeorm';
export declare class ProviderService {
    private providerRepository;
    constructor(providerRepository: Repository<Provider>);
    create(provider: CreateProviderDto): Promise<Provider>;
    findAll(limit: string): Promise<Provider[]>;
    findProvider(providerId: string): Promise<Provider>;
    updateProvider(providerId: number, provider: UpdateProviderDto): Promise<{
        message: string;
    }>;
    removeProvider(providerId: number): Promise<{
        message: string;
    }>;
}
