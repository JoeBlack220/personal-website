import 'reflect-metadata';
import { MetadataKeys } from '../utils';
import { RequestHandler } from 'express';
export function after(after: RequestHandler) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
        const afters = Reflect.getMetadata(
            MetadataKeys.after,
            target,
            key
        ) || [];

        Reflect.defineMetadata(
            MetadataKeys.after,
            [...afters, after],
            target,
            key
        );
    }
}