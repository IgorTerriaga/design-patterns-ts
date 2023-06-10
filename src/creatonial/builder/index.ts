import { MealBox } from "./classes/meal-box";
import { Beans, Rice } from "./classes/meals";

const rice = new Rice('Arroz', 5);
const beans = new Beans('Feijão', 10);
const meat = new Rice('Carne', 20);


const mealbox = new MealBox();
mealbox.add(rice, beans, meat);
console.log(mealbox.getPrice())