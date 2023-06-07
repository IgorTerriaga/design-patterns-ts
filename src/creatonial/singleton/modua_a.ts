import { MyDatabaseModule } from './db/my-db-module';

const db = MyDatabaseModule;
db.add({ name: 'luiz', age: 20 });
db.add({ name: 'Igor', age: 20 });
db.add({ name: 'Carla', age: 20 });

// db.remove(1);
db.show();

export { db };
