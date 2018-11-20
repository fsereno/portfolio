export class UserModel {
    name: string;
    age: number;
    active: boolean;
    constructor(name: string, age: number, active: boolean) {
        this.name = name;
        this.age = age;
        this.active = active;
    }
}