import { Box, Image, VStack, Text, Link } from "@chakra-ui/react"
import { ProductInfo } from "@/types";

interface Props {
    productInfo: ProductInfo
}

export default function ProductInfoBox({productInfo}: Props) {

    return (<>
        <Box maxW="sm" borderWidth="1px">
            <Image src={productInfo.imageUrl} alt={productInfo.imageAlt} />

                <Box p="4" spaceY="2">
                    <VStack>
                        <Text textStyle="l" fontWeight="medium" color="fg">{productInfo.brand}: {productInfo.productName}</Text>
                        <Link variant="underline" href={productInfo.link} colorPalette="teal">Buy now</Link>
                        <Text color="fg">Category: {productInfo.category}</Text>
                        <Text color="fg">Price: {productInfo.price}</Text>
                        <Text color="fg">Country of Origin: {productInfo.countryOfOrigin}</Text>
                        <Text color="fg">Decription: {productInfo.description}</Text>
                    </VStack>
                </Box>
            </Box>
    </>);
    
}