import { Ingrediant } from "../shopping/shopping.model";

export class Recipe{
    public recipeId: number;
    public name: string;
    public description: string;
    public imagePath: string;
    public ingrediants: Ingrediant[];

    constructor( id:number, name:string, desc:string, path:string, ingrediant: Ingrediant[]){
        this.recipeId=id;
        this.name=name;
        this.description=desc;
        this.imagePath=path;
        this.ingrediants=ingrediant;
    }

}