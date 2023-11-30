import { Category, Product } from "../src/alias-type";
import { Category as Ctg, Product as Prd } from "../src/alias-type-with-union";

describe('Type Alias', function() {
    it('should support type alias', function() {
        const category: Category = {
            id: "1",
            name: "PC"
        };

        const product: Product = {
            id: "1",
            name: "Macbook",
            price: 1599,
            category: category
        };

        console.log(product.category);
        console.log(product.category.name);
    });

    it('should support type alias with union', function() {
        const category: Ctg = {
            id: 1,
            name: "PC"
        };

        const product: Prd = {
            id: 1,
            name: "Macbook",
            category: category
        };

        console.log(product.category);
        console.log(product.category.name);
    });
});