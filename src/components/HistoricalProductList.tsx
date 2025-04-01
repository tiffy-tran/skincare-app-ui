import { useState, useEffect } from 'react'; 
import { For, Text, SimpleGrid, VStack, Spinner } from "@chakra-ui/react"

import ProductInfoBox from "./ProductInfoBox";
import { ProductInfo } from "@/types";

export default function HistoricalProductList() {
    // const [historicalProductList, setHistoricalProductList] = useState<ProductInfo[]>([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const fetchHistoricalProductList = async () => {
    //     try {
    //         const res = await fetch("http://localhost:3001/historicalProductList/");
    //         const data = await res.json();
    //         if (res.ok) {
    //             setHistoricalProductList(data);
    //         } else {
    //         //TODO handle error more gracefully
    //         console.error("Failed to fetch historical product list:", res);
    //         setHistoricalProductList([]); // Reset state on error
    //         }
    //     } catch (error) {
    //         console.error("Failed to fetch historical product list:", error);
    //     } finally {
    //         setLoading(false);
    //     }
    //     };
    //     fetchHistoricalProductList();
    //     return () => {
    //     setHistoricalProductList([]);
    //     };
    // }, []);   


    return (
      <>
        {/* <Text textStyle="2xl">
            Every product I've used since I started skincare: 
        </Text>
        { loading ? (
            <VStack colorPalette="teal">
                <Spinner size="xl" color="pink.500" />
                <Text color="purple.800">Loading ❤️</Text>
            </VStack>
        ) : 
        (
            <SimpleGrid minChildWidth="sm" gap="40px">
                <For each={historicalProductList}>
                {(item, index) => (
                    <ProductInfoBox key={index} productInfo={item}/>
                )}
                </For>
            </SimpleGrid>
        )
        } */}
        <Text textStyle="2xl">
            coming soon! 😊
        </Text>
      </>
    );
}
