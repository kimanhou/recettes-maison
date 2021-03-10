export default class Ingredient {
    readonly quantity : string;
    readonly ingredientName : string;

    constructor(quantity : string, ingredientName : string) {
        this.quantity = quantity;
        this.ingredientName = ingredientName;
    }
}
