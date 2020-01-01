interface dbi<T> {
    add(info: T): boolean;
    update(info: T, id: number): boolean;
    delete(id: number): boolean;
    get(id: number): any[];
}
declare class mysql<T> implements dbi<T> {
    add(info: T): boolean;
    update(info: T, id: number): boolean;
    delete(id: number): boolean;
    get(id: number): any[];
}
declare class USER {
    username: string | undefined;
    password: string | undefined;
}
declare var u: USER;
declare var omysql: mysql<USER>;
