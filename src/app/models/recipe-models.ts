
export class Ingredient {
    text: string;
    weight: number;
    food: string;
    quantity: number;
    measure: string;
    public constructor(init?: Partial<Ingredient>) {
        Object.assign(this, init);
    }
}

export interface Recipe {
    uri: string;
    label: string;
    image: string;
    source: string;
    url: string;
    shareAs: string;
    yield: number;
    dietLabels: string[];
    healthLabels: string[];
    cautions: any[];
    ingredientLines: string[];
    ingredients: Ingredient[];
    calories: number;
    totalWeight: number;
}

export interface Hit {
    recipe: Recipe;
    bookmarked: boolean;
    bought: boolean;
}

export interface SearchModel {
    q: string;
    from: number;
    to: number;
    more: boolean;
    count: number;
    hits: Hit[];
}

