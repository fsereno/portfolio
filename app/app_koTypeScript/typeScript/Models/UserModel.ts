export class userModel {
    name: string;
    age: number;
    active: boolean;
    status: string
    constructor(
        name: string,
        age: number,
        active: boolean,
        status: string
    ) {
        this.name = name;
        this.age = age;
        this.active = active;
        this.status = status;
    }
}