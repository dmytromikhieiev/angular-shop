import {ProductInterface} from './product-interface';
import {Category} from '../component/product/product.category';

export class ProductModel implements ProductInterface {
    private name: string;
    private category: Category;

    constructor (name: string, category: Category) {
        this.name = name;
        this.category = category;
    }

    getName (): string {
        return this.name;
    }

    getCategory (): Category {
        return this.category;
    }
}
