import { Text, SimpleGrid } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query"; // Import useQuery properly
import api from "@/axios/setup";

import ProductInfoBox from "./ProductInfoBox";
import { ProductInfo } from "@/types";

//TODO how to dynamically get the date?
const fetchCurrentProducts = async (): Promise<ProductInfo[]> => {
  const { data } = await api.get<ProductInfo[]>("/products?startDate=2025-02-20");
  return data;
};

export default function Homepage() {
  //TODO set up loading and error states
  const { data: products } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchCurrentProducts,
  });


  return (
    <>
      <Text fontSize="2xl" fontWeight="bold">
        Current products:
      </Text>
      <SimpleGrid minChildWidth="200px" spacing="40px">
        {products?.map((product) => (
          <ProductInfoBox key={product.id} data={product} />
        ))}
      </SimpleGrid>
    </>
  );
}
