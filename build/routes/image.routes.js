"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = __importDefault(require("express"));
const image_controller_1 = require("../controllers/image.controller");
const imageRouter = express_1.default.Router();
imageRouter.get('/*', image_controller_1.getImage);
exports.default = imageRouter;
