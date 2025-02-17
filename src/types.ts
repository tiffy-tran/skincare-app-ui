export interface ProductInfo {
    category: Category,
    imageUrl: string,
    imageAlt: string,
    brand: string,
    productName: string
    price: string,
    volumeWeight: string,
    countryOfOrigin: string,
    link: string,
    description: string
};

export enum Category {
    SUNSCREEN = "Sunscreen",
    SERUM = "Serum",
    MOISTURIZER = "Moisturizer",
    CLEANSER = "Cleanser",
    TONER = "Toner"
};