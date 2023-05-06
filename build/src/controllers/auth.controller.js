"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const auth_service_1 = require("../services/auth.service");
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield (0, auth_service_1.validateUserCredentials)(email, password);
        if (user == null) {
            res.status(401).json({
                statusCode: 401,
                message: 'Clave o correo incorrectos'
            });
            return;
        }
        const token = (0, auth_service_1.generateToken)(user);
        res.status(200).json({
            token,
            user_id: user.id,
            email: user.email,
            name: user.name
        });
    }
    catch (err) {
        next(err);
    }
});
exports.login = login;
