import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import * as _ from "lodash";
import {Config} from "../../config/config"

// Object Type
import {Product} from './data/product';
import {Logo} from './data/logo';
import {Category} from './data/category';
import {Size} from './data/size';
import {Color} from './data/color';

@Injectable()
export class productService {
    private config: Config = new Config();
    private baseUrl: string =  this.config.baseUrl;
    private base: string = './assets/json/';

    constructor(private http: Http) {
    }

    // Get Products
    // getProduct(): Observable<Product[]>{
    //     console.log(this.http.get(this.baseUrl + '/api/prods').map((res:Response) => res.json()));
    //     return this.http.get(this.baseUrl + '/api/prods').map((res:Response) => res.json());
    // }

    // Get Products
    getProduct(): Observable<Product[]> {
        return this.http.get(this.baseUrl + '/api/prods')
            .map(this.extractProducts);
        // .map((res:Response) => res.json());
    }

    // console.log(this.config);
    // Get Product By Id
    getIdProduct(id: number): Observable<Product> {
        return this.getProduct().map(products => products.find(product => product.id === id));
    }

    // Get Product By Slug
    getSlugProduct(slug: string): Observable<Product> {
        return this.getProduct().map(products => products.find(product => product.slug === slug));
    }

    // Get Logo
    getLogo(): Observable<Logo[]> {
        return this.http.get(this.base + 'logo.json').map((res: Response) => res.json());
    }

    // Get Category
    getCategory(): Observable<Category[]> {
        return this.http.get(this.baseUrl + '/api/brands').map(this.extractCategory);
    }

    // Get Size
    getSize(): Observable<Size[]> {
        return this.http.get(this.base + 'size.json').map((res: Response) => res.json());
    }

    // Get Color
    getColor(): Observable<Color[]> {
        return this.http.get(this.base + 'color.json').map((res: Response) => res.json());
    }

    private extractProducts(response: Response) {
        let res = response.json();
        let products: Product[] = [];
        for (let i = 0; i < res.length; i++) {
            products.push(new Product(
                res[i].id,
                res[i].productName,
                '/'+res[i].id,
                res[i].description,
                res[i].price,
                'http://mp.dev.devshop.odnodumci.com' + res[i].image,
                res[i].brand.replace(/&#039;/g, "\'"),
                res[i].category.replace(/&#039;/g, "\'"),
            ));
        }
        return products;
    }

    private extractCategory(response: Response) {
        let res = response.json();
        let categories: Category[] = [];
        for (let i = 0; i < res.length; i++) {
            categories.push(new Category(
                res[i].id,
                res[i].categoryName.replace(/&#039;/g, "\'"),
                res[i].description,
                )
            );

        }
        return categories;


    }


    // private extractProduct(response: Response) {
    //     let res = response.json();
    //     let product: Product = new Product(
    //         res.id,
    //         res.productName,
    //         '/prod/' + res.id,
    //         res.description,
    //         res.price,
    //         res.image,
    //         'party'
    //     );
    //     return product;
    //
    //
    // }
}
