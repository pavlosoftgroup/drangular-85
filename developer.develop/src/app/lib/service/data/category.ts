export class Category{
    id: number;
    categoryName: string;
    description: string;
    image: string;
    show: boolean = false;
    constructor(id, categoryName, description){

        this.id = id;
        this.categoryName = categoryName;
        this.description = description;
    }
}