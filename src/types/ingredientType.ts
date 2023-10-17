export type ingredientType = {
    idIngredient: string,
    strDescription: string | null,
    strIngredient: string,
    strType: string | null,
}

export type ingredients = {
    meals: ingredientType[]
}