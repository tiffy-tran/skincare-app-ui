import { useState, useEffect } from 'react';  
import { Text, SimpleGrid, VStack, Spinner } from "@chakra-ui/react";

import ProductInfoBox from "./ProductInfoBox";
import { ProductInfo } from "@/types";


export default function Homepage() {
  const [currentProducts, setCurrentProducts] = useState<ProductInfo[]>([]);
  const [loading, setLoading] = useState(true);

  //TODO need to pass in the date, or have isCurrent flag on all products?
  //TODO how to dynamically get the date?
  useEffect(() => {
    const fetchCurrentProducts = async () => {
      try {
        const res = await fetch("http://localhost:3001/currrentProductList/");
        const data = await res.json();
        if (res.ok) {
          setCurrentProducts(data);
        } else {
          //TODO handle error more gracefully
          console.error("Failed to fetch current products:", res);
          setCurrentProducts([]); // Reset state on error
        }
      } catch (error) {
        console.error("Failed to fetch current products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCurrentProducts();
    return () => {
      setCurrentProducts([]);
    };
  }, []);


  return (
    <>
      <Text fontSize="2xl" fontWeight="bold">
        Current products:
      </Text>
      { loading ? (
        <VStack colorPalette="teal">
          <Spinner size="xl" color="pink.500" />
          <Text color="purple.800">Loading ❤️</Text>
        </VStack>
      ) : 
      (
        <SimpleGrid minChildWidth="200px">
          {currentProducts?.map((product) => (
            <ProductInfoBox key={product.id} productInfo={product} />
          ))}
        </SimpleGrid>
      )}
    </>
  );
}
