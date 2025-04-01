import { useState, useEffect } from 'react'; 
import { For, Text, SimpleGrid, VStack, Spinner } from "@chakra-ui/react"

import ProductInfoBox from "./ProductInfoBox";
import { ProductInfo } from "@/types";

export default function StashList() {
  const [stashList, setStashList] = useState<ProductInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStashList = async () => {
      try {
        const res = await fetch("http://localhost:3001/stashList/");
        const data = await res.json();
        if (res.ok) {
          setStashList(data);
        } else {
          //TODO handle error more gracefully
          console.error("Failed to fetch stash list:", res);
          setStashList([]); // Reset state on error
        }
      } catch (error) {
        console.error("Failed to fetch stash list:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStashList();
    return () => {
      setStashList([]);
    };
  }, []);

    return (
      <>
        <Text fontSize="4xl" fontWeight="bold" textAlign={"center"} padding={2}>
          What's in my stash?
        </Text>
        { loading ? (
          <VStack colorPalette="teal">
            <Spinner size="xl" color="pink.500" />
            <Text color="purple.800">Loading ❤️</Text>
         </VStack>
        ) : 
        (
          <SimpleGrid minChildWidth="sm" gap="40px">
              <For each={stashList}>
              {(item, index) => (
                  <ProductInfoBox key={index} productInfo={item}/>
              )}
              </For>
          </SimpleGrid>
        )
      }
      </>
    );
}
