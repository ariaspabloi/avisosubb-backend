"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const post_routes_1 = __importDefault(require("./routes/post.routes"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const image_routes_1 = __importDefault(require("./routes/image.routes"));
const app = (0, express_1.default)();
const port = Number(process.env.PORT) | 8080;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/auth/', auth_routes_1.default);
app.use('/post/', post_routes_1.default);
app.use('/user/', user_routes_1.default);
app.use('/images/posts/', image_routes_1.default);
const start = () => {
    try {
        app.listen(port, () => {
            console.log(`Server is Successfully Running, and App is listening on port ${port}`);
        });
    }
    catch (error) {
        console.log("Error occurred, server can't start", error);
    }
};
start();
