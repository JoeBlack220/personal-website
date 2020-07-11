import express from 'express';

// Singleton of the server's router
export class AppRouter {
    private static instance: express.Router;
    static getInstance(): express.Router {
        if (!AppRouter.instance) {
            AppRouter.instance = express.Router();
        }
        return AppRouter.instance;
    }
}