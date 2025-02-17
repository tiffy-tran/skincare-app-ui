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
    Sunscreen,
    Serum,
    Moisturizer,
    Cleanser,
    Toner
};