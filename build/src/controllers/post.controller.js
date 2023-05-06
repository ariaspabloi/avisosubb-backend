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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.putPost = exports.postPost = exports.getPostById = exports.getAllPosts = void 0;
const post_service_1 = __importDefault(require("../services/post.service"));
const utils_1 = require("../utils");
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
        const id = Number(req.params.id);
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
const postPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newPost = (0, utils_1.toNewPostEntry)(req.body);
        const insertedPost = yield post_service_1.default.savePost(newPost);
        res.status(200).json(insertedPost);
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
