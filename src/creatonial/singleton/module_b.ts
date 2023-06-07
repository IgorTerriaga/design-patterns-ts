import { MyDatabaseModule } from './db/my-db-module';
import { db as myDatabaseClassicFromModule } from './modua_a';

const db = MyDatabaseModule;
db.add({ name: 'xxx', age: 20 });
db.add({ name: 'yyy', age: 20 });
db.add({ name: 'zzz', age: 20 });
db.show();
console.log(db === myDatabaseClassicFromModule);
