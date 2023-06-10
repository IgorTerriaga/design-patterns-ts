import { MealCompositeContract } from "../interfaces/meal-composite-contract";

export class MealBox implements MealCompositeContract {
    private readonly _children: MealCompositeContract[] = [];

    getPrice(): number {
        return this._children.reduce((sum, meal) => sum + meal.getPrice(), 0);
    }
    add(...meal: MealCompositeContract[]): void {
        meal.forEach(element => this._children.push(element));
    }

}