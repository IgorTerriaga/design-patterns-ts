import { User } from '../interfaces/users';

export class MyDatabaseClassic {
  private static _instance: MyDatabaseClassic | null = null;
  private users: User[] = [];

  private constructor() {}

  public static get instance(): MyDatabaseClassic {
    if (MyDatabaseClassic._instance === null) {
      MyDatabaseClassic._instance = new MyDatabaseClassic();
    }
    return MyDatabaseClassic._instance;
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
