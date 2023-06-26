"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostsByUser = exports.deletePost = exports.putPost = exports.postPost = exports.getPostById = exports.getAllPosts = void 0;
const post_service_1 = __importDefault(require("../services/post.service"));
const utils_1 = require("../utils");
const storageService = __importStar(require("../services/storage.service"));
const getAllPosts = (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield post_service_1.default.getAllPosts();
        res.status(200).json(posts);
    }
    catch (err) {
        next(err);
    }
});
exports.getAllPosts = getAllPosts;
const getPostById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let id = 0;
        if (req.params.id != null) {
            id = Number(req.params.id);
        }
        else if (req.user_id != null) {
            id = Number(req.user_id);
        }
        else {
            res.sendStatus(400);
        }
        const post = yield post_service_1.default.findPostById(id);
        if (post != null) {
            res.status(200).json(post);
        }
        else {
            res.sendStatus(404);
        }
    }
    catch (err) {
        next(err);
    }
});
exports.getPostById = getPostById;
const getPostsByUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const posts = yield post_service_1.default.getPostsByUser(id);
        res.status(200).json(posts);
    }
    catch (err) {
        next(err);
    }
});
exports.getPostsByUser = getPostsByUser;
const postPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newPost = (0, utils_1.toNewPostEntry)(Object.assign({}, req.body));
        const imagesCount = req.files != null ? Number(req.files.length) : 0;
        const insertedPost = yield post_service_1.default.savePost(newPost, Number(req.user_id), imagesCount);
        if (imagesCount === 0) {
            res.status(200).json(insertedPost);
        }
        else {
            const imagesStructure = insertedPost.images.map((i) => `${i.post_id}/${i.image_id}`);
            yield storageService.saveImages(imagesStructure, req.files);
            const updatesPost = yield post_service_1.default.updatePost(insertedPost.id, Object.assign(Object.assign({}, insertedPost), { image_id: insertedPost.images[0].image_id }));
            res.status(200).json(updatesPost);
        }
    }
    catch (err) {
        next(err);
    }
});
exports.postPost = postPost;
const putPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const newPost = (0, utils_1.toNewPostEntry)(req.body);
        const updatedPost = yield post_service_1.default.updatePost(id, newPost);
        if (updatedPost != null) {
            res.status(200).json(updatedPost);
        }
        else {
            res.status(400);
        }
    }
    catch (err) {
        next(err);
    }
});
exports.putPost = putPost;
const deletePost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const deletePost = yield post_service_1.default.deletePost(id);
        res.status(200).json(deletePost);
    }
    catch (err) {
        next(err);
    }
});
exports.deletePost = deletePost;
