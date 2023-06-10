import { MealCompositeContract } from "../interfaces/meal-composite-contract";

export  abstract class AbstractMeal implements MealCompositeContract {
    constructor(private name: string, private price: number) {}

    getPrice(): number {
        return this.price;
    }

}