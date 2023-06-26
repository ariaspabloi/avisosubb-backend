"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = __importDefault(require("express"));
const post_controller_1 = require("../controllers/post.controller");
const post_middleware_1 = require("../middlewares/post.middleware");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage });
const postRouter = express_1.default.Router();
postRouter.get('/', post_controller_1.getAllPosts);
postRouter.get('/user/:id', post_controller_1.getPostsByUser);
postRouter.get('/user', auth_middleware_1.authenticateToken, post_controller_1.getPostsByUser);
postRouter.get('/:id', post_controller_1.getPostById);
postRouter.post('/', auth_middleware_1.authenticateToken, post_middleware_1.postInputMiddleware, upload.array('images', 12), post_controller_1.postPost);
postRouter.put('/:id', post_controller_1.putPost);
postRouter.delete('/:id', post_controller_1.deletePost);
exports.default = postRouter;
