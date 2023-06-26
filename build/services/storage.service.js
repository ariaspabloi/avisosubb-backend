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
exports.getImage = exports.saveImages = void 0;
require("dotenv/config");
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const S3_BUCKET = process.env.S3_BUCKET;
const s3 = new aws_sdk_1.default.S3();
if (S3_BUCKET == null) {
    throw new Error('S3_BUCKET is not defined');
}
const saveImages = (names, images) => __awaiter(void 0, void 0, void 0, function* () {
    const results = [];
    for (let i = 0; i < names.length; i++) {
        const direction = names[i];
        const result = yield saveImage(direction, images[i]);
        results.push(result);
    }
    return results;
});
exports.saveImages = saveImages;
const saveImage = (direction, image) => __awaiter(void 0, void 0, void 0, function* () {
    direction = `images/posts/${direction}.${image.originalname.slice(image.originalname.lastIndexOf('.') + 1)}`;
    const uploadParams = {
        Bucket: S3_BUCKET,
        Key: direction,
        Body: image.buffer
    };
    const upload = yield s3.upload(uploadParams).promise();
    return upload.Location;
});
const getImage = (direction) => __awaiter(void 0, void 0, void 0, function* () {
    return yield s3
        .getObject({
        Bucket: S3_BUCKET,
        Key: `images/posts${direction}`
    })
        .promise();
});
exports.getImage = getImage;
