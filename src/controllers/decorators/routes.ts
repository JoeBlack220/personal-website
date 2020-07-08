import 'reflect-metadata';
export function get(path: string) {
    return function (target: any, key: any, desc: PropertyDescriptor) {
        Reflect.defineMetadata('path', path, target, key);
    }
}