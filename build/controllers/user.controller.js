"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
const user_service_1 = __importDefault(require("../services/user.service"));
const getAllUsers = (_req, res) => {
    user_service_1.default
        .getAllUser()
        .then((users) => {
        res.status(200).json(users);
    })
        .catch((error) => {
        res.status(500).json({ message: `Something went wrong. ${error.message}` });
    });
};
exports.getAllUsers = getAllUsers;
