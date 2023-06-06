import { MyDatabaseClassic } from "./db/my-db-classic";
import './modua_a';

const db = MyDatabaseClassic.getInstance();
db.add({name: 'xxx', age: 20});
db.add({name: 'yyy', age: 20});
db.add({name: 'zzz', age: 20});
db.show();
