import { For, Text, SimpleGrid } from "@chakra-ui/react"
import ProductInfoBox from "./ProductInfoBox";
import { Category } from "@/types";

export default function HistoricalProductList() {
    return (
      <>
        <Text textStyle="2xl">
            Every product I've used since I started skincare: 
        </Text>
        <SimpleGrid minChildWidth="sm" gap="40px">
            <For each={data}>
            {(item, index) => (
                <ProductInfoBox key={index} productInfo={item}/>
            )}
            </For>
        </SimpleGrid>
      </>
    );
}

//TODO this is just sample data, figure out how to get this from endpoints
const data = [
    {
        category: Category.Sunscreen,
        imageUrl: "https://image.globaloliveyoungshop.com/prdtImg/1866/cc655f3b-6dc5-430f-b0e0-ccdca8feb7b3.jpg?RS=1500x1500&AR=0&SF=webp&QT=80",
        imageAlt: "Beauty of Joseon Relief Sun : Rice + Probiotics 50mL",
        brand: "Beauty of Joseon",
        productName: "Relief Sun : Rice + Probiotics 50mL",
        price: "$18",
        volumeWeight: "50mL",
        countryOfOrigin: "South Korea",
        link: "https://global.oliveyoung.com/product/detail?prdtNo=GA220816046",
        description: "A sunscreen that is gentle on the skin, this is a daily sunscreen that absorbs and blocks the energy of ultraviolet rays and adds moisture to the skin by adding soothing ingredients." +
                    "\nWith a moisturizing cream formula without oiliness, it is absorbed without stickiness or cloudiness even after makeup." +
                    "\nIt perfectly protects the skin even when exposed to ultraviolet rays for a long time, and it can be used comfortably all year round by reducing unnecessary ingredients.",
    },
    {
        category: Category.Sunscreen,
        imageUrl: "https://image.globaloliveyoungshop.com/prdtImg/1866/cc655f3b-6dc5-430f-b0e0-ccdca8feb7b3.jpg?RS=1500x1500&AR=0&SF=webp&QT=80",
        imageAlt: "Beauty of Joseon Relief Sun : Rice + Probiotics 50mL",
        brand: "Beauty of Joseon",
        productName: "Relief Sun : Rice + Probiotics 50mL",
        price: "$18",
        volumeWeight: "50mL",
        countryOfOrigin: "South Korea",
        link: "https://global.oliveyoung.com/product/detail?prdtNo=GA220816046",
        description: "A sunscreen that is gentle on the skin, this is a daily sunscreen that absorbs and blocks the energy of ultraviolet rays and adds moisture to the skin by adding soothing ingredients." +
                        "\nWith a moisturizing cream formula without oiliness, it is absorbed without stickiness or cloudiness even after makeup." +
                        "\nIt perfectly protects the skin even when exposed to ultraviolet rays for a long time, and it can be used comfortably all year round by reducing unnecessary ingredients.",
    },
    {
        category: Category.Sunscreen,
        imageUrl: "https://image.globaloliveyoungshop.com/prdtImg/1866/cc655f3b-6dc5-430f-b0e0-ccdca8feb7b3.jpg?RS=1500x1500&AR=0&SF=webp&QT=80",
        imageAlt: "Beauty of Joseon Relief Sun : Rice + Probiotics 50mL",
        brand: "Beauty of Joseon",
        productName: "Relief Sun : Rice + Probiotics 50mL",
        price: "$18",
        volumeWeight: "50mL",
        countryOfOrigin: "South Korea",
        link: "https://global.oliveyoung.com/product/detail?prdtNo=GA220816046",
        description: "A sunscreen that is gentle on the skin, this is a daily sunscreen that absorbs and blocks the energy of ultraviolet rays and adds moisture to the skin by adding soothing ingredients." +
                        "\nWith a moisturizing cream formula without oiliness, it is absorbed without stickiness or cloudiness even after makeup." +
                        "\nIt perfectly protects the skin even when exposed to ultraviolet rays for a long time, and it can be used comfortably all year round by reducing unnecessary ingredients.",
    },
    {
        category: Category.Sunscreen,
        imageUrl: "https://image.globaloliveyoungshop.com/prdtImg/1866/cc655f3b-6dc5-430f-b0e0-ccdca8feb7b3.jpg?RS=1500x1500&AR=0&SF=webp&QT=80",
        imageAlt: "Beauty of Joseon Relief Sun : Rice + Probiotics 50mL",
        brand: "Beauty of Joseon",
        productName: "Relief Sun : Rice + Probiotics 50mL",
        price: "$18",
        volumeWeight: "50mL",
        countryOfOrigin: "South Korea",
        link: "https://global.oliveyoung.com/product/detail?prdtNo=GA220816046",
        description: "A sunscreen that is gentle on the skin, this is a daily sunscreen that absorbs and blocks the energy of ultraviolet rays and adds moisture to the skin by adding soothing ingredients." +
                        "\nWith a moisturizing cream formula without oiliness, it is absorbed without stickiness or cloudiness even after makeup." +
                    "\nIt perfectly protects the skin even when exposed to ultraviolet rays for a long time, and it can be used comfortably all year round by reducing unnecessary ingredients.",
    },
    {
        category: Category.Sunscreen,
        imageUrl: "https://image.globaloliveyoungshop.com/prdtImg/1866/cc655f3b-6dc5-430f-b0e0-ccdca8feb7b3.jpg?RS=1500x1500&AR=0&SF=webp&QT=80",
        imageAlt: "Beauty of Joseon Relief Sun : Rice + Probiotics 50mL",
        brand: "Beauty of Joseon",
        productName: "Relief Sun : Rice + Probiotics 50mL",
        price: "$18",
        volumeWeight: "50mL",
        countryOfOrigin: "South Korea",
        link: "https://global.oliveyoung.com/product/detail?prdtNo=GA220816046",
        description: "A sunscreen that is gentle on the skin, this is a daily sunscreen that absorbs and blocks the energy of ultraviolet rays and adds moisture to the skin by adding soothing ingredients." +
            "\nWith a moisturizing cream formula without oiliness, it is absorbed without stickiness or cloudiness even after makeup." +
            "\nIt perfectly protects the skin even when exposed to ultraviolet rays for a long time, and it can be used comfortably all year round by reducing unnecessary ingredients.",
    },
    {
        category: Category.Sunscreen,
        imageUrl: "https://image.globaloliveyoungshop.com/prdtImg/1866/cc655f3b-6dc5-430f-b0e0-ccdca8feb7b3.jpg?RS=1500x1500&AR=0&SF=webp&QT=80",
        imageAlt: "Beauty of Joseon Relief Sun : Rice + Probiotics 50mL",
        brand: "Beauty of Joseon",
        productName: "Relief Sun : Rice + Probiotics 50mL",
        price: "$18",
        volumeWeight: "50mL",
        countryOfOrigin: "South Korea",
        link: "https://global.oliveyoung.com/product/detail?prdtNo=GA220816046",
        description: "A sunscreen that is gentle on the skin, this is a daily sunscreen that absorbs and blocks the energy of ultraviolet rays and adds moisture to the skin by adding soothing ingredients." +
                        "\nWith a moisturizing cream formula without oiliness, it is absorbed without stickiness or cloudiness even after makeup." +
        "\nIt perfectly protects the skin even when exposed to ultraviolet rays for a long time, and it can be used comfortably all year round by reducing unnecessary ingredients.",
    },
    {
        category: Category.Sunscreen,
        imageUrl: "https://image.globaloliveyoungshop.com/prdtImg/1866/cc655f3b-6dc5-430f-b0e0-ccdca8feb7b3.jpg?RS=1500x1500&AR=0&SF=webp&QT=80",
        imageAlt: "Beauty of Joseon Relief Sun : Rice + Probiotics 50mL",
        brand: "Beauty of Joseon",
        productName: "Relief Sun : Rice + Probiotics 50mL",
        price: "$18",
        volumeWeight: "50mL",
        countryOfOrigin: "South Korea",
        link: "https://global.oliveyoung.com/product/detail?prdtNo=GA220816046",
        description: "A sunscreen that is gentle on the skin, this is a daily sunscreen that absorbs and blocks the energy of ultraviolet rays and adds moisture to the skin by adding soothing ingredients." +
                        "\nWith a moisturizing cream formula without oiliness, it is absorbed without stickiness or cloudiness even after makeup." +
                        "\nIt perfectly protects the skin even when exposed to ultraviolet rays for a long time, and it can be used comfortably all year round by reducing unnecessary ingredients.",
    },
    {
        category: Category.Sunscreen,
        imageUrl: "https://image.globaloliveyoungshop.com/prdtImg/1866/cc655f3b-6dc5-430f-b0e0-ccdca8feb7b3.jpg?RS=1500x1500&AR=0&SF=webp&QT=80",
        imageAlt: "Beauty of Joseon Relief Sun : Rice + Probiotics 50mL",
        brand: "Beauty of Joseon",
        productName: "Relief Sun : Rice + Probiotics 50mL",
        price: "$18",
        volumeWeight: "50mL",
        countryOfOrigin: "South Korea",
        link: "https://global.oliveyoung.com/product/detail?prdtNo=GA220816046",
        description: "A sunscreen that is gentle on the skin, this is a daily sunscreen that absorbs and blocks the energy of ultraviolet rays and adds moisture to the skin by adding soothing ingredients." +
                        "\nWith a moisturizing cream formula without oiliness, it is absorbed without stickiness or cloudiness even after makeup." +
                        "\nIt perfectly protects the skin even when exposed to ultraviolet rays for a long time, and it can be used comfortably all year round by reducing unnecessary ingredients.",
}
]