import {Category} from '../component/product/product.category';

export interface ProductInterface {
    getName(): string;
    getCategory(): Category;
}
