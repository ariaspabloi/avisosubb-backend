"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNewPostEntry = void 0;
const toNewPostEntry = (object) => {
    return {
        user_id: object.user_id,
        title: object.title,
        description: object.description,
        expiration_date: object.expiration_date,
        image_code: object.image_code,
        status: object.status,
        campus_id: object.campus_id,
        price: object.price
    };
};
exports.toNewPostEntry = toNewPostEntry;
