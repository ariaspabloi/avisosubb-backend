"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = __importDefault(require("express"));
const post_controller_1 = require("../controllers/post.controller");
const post_middleware_1 = require("../middlewares/post.middleware");
const postRouter = express_1.default.Router();
postRouter.get('/', post_controller_1.getAllPosts);
postRouter.get('/:id', post_controller_1.getPostById);
postRouter.post('/', post_middleware_1.postInputMiddleware, post_controller_1.postPost);
postRouter.put('/:id', post_controller_1.putPost);
postRouter.delete('/:id', post_controller_1.deletePost);
exports.default = postRouter;
