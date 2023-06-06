
interface User {
    name: string;
    age: number;
}
export class MyDatabaseClassic {
    private static instance: MyDatabaseClassic | null = null;
    private users: User[] = [];

    private constructor() { }

    public static getInstance(): MyDatabaseClassic {
        if (MyDatabaseClassic.instance === null) {
            MyDatabaseClassic.instance = new MyDatabaseClassic();
        }
        return MyDatabaseClassic.instance;
    }

    public add(user: User): void {
        this.users.push(user);
    }
    public remove(index: number): void {
        this.users.splice(index, 1);
    }
    public show() {
        for (const user of this.users) {
            console.log(user);
        }
    }
}
