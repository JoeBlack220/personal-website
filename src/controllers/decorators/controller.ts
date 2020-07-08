import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { Methods, MetadataKeys } from '../utils';

export const router = AppRouter.getInstance();
export function controller(routePrefix: string) {
    return function (target: Function) {
        for (let key in target.prototype) {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata(
                MetadataKeys.path,
                target.prototype,
                key
            );

            const method: Methods = Reflect.getMetadata(
                MetadataKeys.method,
                target.prototype,
                key
            );

            const middlewares = Reflect.getMetadata(
                MetadataKeys.middleware,
                target.prototype,
                key
            ) || [];

            const afters = Reflect.getMetadata(
                MetadataKeys.after,
                target.prototype,
                key
            ) || [];

            if (path) {
                router[method](`${routePrefix}${path}`, ...middlewares, routeHandler, ...afters);
            }
        }
    }
}