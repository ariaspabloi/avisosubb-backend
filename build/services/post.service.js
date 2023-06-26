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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db"));
const savePost = (data, userId, imagesCount) => __awaiter(void 0, void 0, void 0, function* () {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { campus_id } = data, restData = __rest(data, ["campus_id"]);
    const campusId = typeof campus_id === 'number' ? campus_id : undefined;
    return yield db_1.default.post.create({
        data: Object.assign(Object.assign({ user: {
                connect: { id: userId }
            }, campus: {
                connect: { id: campusId }
            } }, restData), { image_id: undefined, images: {
                create: Array.from({ length: imagesCount }).fill({})
            } }),
        include: { images: true }
    });
});
const getAllPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield db_1.default.post.findMany({
        where: { status: true },
        include: {
            user: {
                select: { id: true, name: true }
            }
        }
    });
});
const getPostsByUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield db_1.default.post.findMany({
        where: {
            user_id: id
        },
        include: {
            user: {
                select: { id: true, name: true, email: true, phone: true, instagram: true }
            }
        }
    });
});
const findPostById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield db_1.default.post.findUnique({
        where: {
            id
        },
        include: {
            user: {
                select: { id: true, name: true, email: true, phone: true, instagram: true }
            },
            images: true
        }
    });
});
const updatePost = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield db_1.default.post.update({
        where: { id },
        data: {
            title: data.title,
            description: data.description,
            post_date: data.post_date,
            modification_date: data.modification_date,
            expiration_date: data.expiration_date,
            status: data.status,
            price: data.price,
            campus: {
                connect: { id: data.campus_id }
            },
            image: {
                connect: { image_id: data.image_id }
            },
            images: {
                connect: data.images.map((d) => {
                    return { image_id: d.image_id };
                }) // Assuming you want to create new images
            }
        },
        include: {
            user: {
                select: { id: true, name: true, email: true, phone: true, instagram: true }
            },
            images: true
        }
    });
});
const deletePost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield db_1.default.post.delete({
        where: { id }
    });
});
exports.default = { savePost, getAllPosts, findPostById, updatePost, deletePost, getPostsByUser };
