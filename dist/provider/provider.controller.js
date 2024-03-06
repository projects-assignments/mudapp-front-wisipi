"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderController = void 0;
const common_1 = require("@nestjs/common");
const provider_service_1 = require("./provider.service");
const create_provider_dto_1 = require("./dto/create-provider.dto");
const update_provider_dto_1 = require("./dto/update-provider.dto");
const swagger_1 = require("@nestjs/swagger");
const provider_entity_1 = require("./entities/provider.entity");
let ProviderController = class ProviderController {
    constructor(providerService) {
        this.providerService = providerService;
    }
    create(createProviderDto) {
        return this.providerService.create(createProviderDto);
    }
    findAll(limit) {
        return this.providerService.findAll(limit);
    }
    findProvider(providerId) {
        return this.providerService.findProvider(providerId);
    }
    updateProvider(providerId, provider) {
        return this.providerService.updateProvider(providerId, provider);
    }
    removeProvider(providerId) {
        return this.providerService.removeProvider(providerId);
    }
};
exports.ProviderController = ProviderController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'create provider' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'forbidden' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_provider_dto_1.CreateProviderDto]),
    __metadata("design:returntype", void 0)
], ProviderController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'all providers found' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'forbidden' }),
    __param(0, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProviderController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':providerId'),
    (0, swagger_1.ApiOperation)({ summary: 'one providerId found' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'provider found', type: provider_entity_1.Provider }),
    __param(0, (0, common_1.Param)('providerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProviderController.prototype, "findProvider", null);
__decorate([
    (0, common_1.Put)(':providerId'),
    (0, swagger_1.ApiOperation)({ summary: 'update provider' }),
    __param(0, (0, common_1.Param)('providerId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_provider_dto_1.UpdateProviderDto]),
    __metadata("design:returntype", void 0)
], ProviderController.prototype, "updateProvider", null);
__decorate([
    (0, common_1.Delete)(':providerId'),
    (0, swagger_1.ApiOperation)({ summary: 'delete provider' }),
    __param(0, (0, common_1.Param)('providerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProviderController.prototype, "removeProvider", null);
exports.ProviderController = ProviderController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('provider'),
    (0, common_1.Controller)('provider'),
    __metadata("design:paramtypes", [provider_service_1.ProviderService])
], ProviderController);
//# sourceMappingURL=provider.controller.js.map