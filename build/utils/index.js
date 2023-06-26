"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNewPostEntry = void 0;
const toNewPostEntry = (object) => {
    return {
        title: object.title,
        description: object.description,
        expiration_date: object.expiration_date,
        status: Boolean(object.status),
        campus_id: Number(object.campus_id),
        price: Number(object.price)
    };
};
exports.toNewPostEntry = toNewPostEntry;
