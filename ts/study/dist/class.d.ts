declare class Person {
    protected name: string;
    constructor(name: string);
    run(): void;
}
declare var p: Person;
declare class Web extends Person {
    constructor(name: string);
    work(): void;
    run(): void;
}
declare var w: Web;
