import { parseConfig } from '../utils/parseConfig.util';

const config = parseConfig({
    globalPath: {
        info        : "Base path for bff digital menu",
        default     : "/bff/tc-digital-menu-bff",
    },
    port: {
        info        : "Port for application",
        env         : "PORT",
        required    : true,
    },
    tokens: {
        tokenSecret: {
            info        : "Token Secret JWT",
            env         : "TOKEN_SECRET",
            required    : true,
        },
        tokenSesion: {
            info        : "Token Sesion",
            env         : "TOKEN_SESION",
            required    : true,
        },
    },
    apis: {
        API_PRODUCTS: {
            info        : "API for products",
            env         : "API_PRODUCTS",
            required    : true,
        },
    }
});

export default config;