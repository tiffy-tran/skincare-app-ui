export interface ProductInfo {
    id: number,
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
    TONER = "Toner",
    EYE_CREAM = "Eye Cream",
    EXFOLIATOR = "Exfoliator",
    LIP = "Lip",
    HAIR = "Hair"
};