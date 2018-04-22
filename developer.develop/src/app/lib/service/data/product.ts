export class Product {
    id: number;
    productName: string;
    slug: any;
    description: string;
    price: number;
    image: string;
    category: string;
    brand: string = 'none';
    color: string = 'white';
    langcode: string = 'ru';
    size: number = 0;
    stock: any = 1;
    wishlist: number = 0;
    gallery: [
        {
            id: number;
            thumbnail: string;
            images: string;
        }
        ]

    constructor(id, productName, slug, description, price, image, category, brand) {
        this.id = id;
        this.productName = productName;
        this.slug = slug;
        this.description = description;
        this.price = price;
        this.image = image;
        this.category = category;
        this.brand = brand;
    }
}