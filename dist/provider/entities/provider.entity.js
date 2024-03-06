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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provider = void 0;
const swagger_1 = require("@nestjs/swagger");
const bcrypt_1 = require("bcrypt");
const ticket_entity_1 = require("../../ticket/entities/ticket.entity");
const typeorm_1 = require("typeorm");
let Provider = class Provider {
    async hashPassword() {
        try {
            const salt = await (0, bcrypt_1.genSalt)(10);
            const hashedPassword = await (0, bcrypt_1.hash)(this.password, salt);
            this.password = hashedPassword;
            console.log(hashedPassword);
        }
        catch (error) {
            throw new Error('encrypting password failed');
        }
    }
};
exports.Provider = Provider;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Provider.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Provider.prototype, "providerName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Provider.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Provider.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Provider.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Provider.prototype, "lastname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ example: 'Berlingo', description: 'The car brand' }),
    __metadata("design:type", String)
], Provider.prototype, "vehicle", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ example: 'small', description: 'car size' }),
    __metadata("design:type", String)
], Provider.prototype, "vehicleSize", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ example: 'Barcelona', description: 'provider location' }),
    __metadata("design:type", String)
], Provider.prototype, "origin", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ example: 'Catalunya', description: 'Working area' }),
    __metadata("design:type", String)
], Provider.prototype, "trip", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ example: 'available', description: 'provider availability' }),
    __metadata("design:type", Boolean)
], Provider.prototype, "availability", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ example: 'Excellent', description: 'provider rating' }),
    __metadata("design:type", String)
], Provider.prototype, "reviews", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Provider.prototype, "hashPassword", null);
__decorate([
    (0, typeorm_1.OneToMany)(() => ticket_entity_1.Ticket, (ticket) => ticket.provider),
    __metadata("design:type", Array)
], Provider.prototype, "tickets", void 0);
exports.Provider = Provider = __decorate([
    (0, typeorm_1.Entity)()
], Provider);
//# sourceMappingURL=provider.entity.js.map