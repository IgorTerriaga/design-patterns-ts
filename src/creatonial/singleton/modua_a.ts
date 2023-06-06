import { MyDatabaseClassic } from "./db/my-db-classic";

const db = MyDatabaseClassic.getInstance();
db.add({name: 'luiz', age: 20});
db.add({name: 'Igor', age: 20});
db.add({name: 'Carla', age: 20});

// db.remove(1);
// db.show();
