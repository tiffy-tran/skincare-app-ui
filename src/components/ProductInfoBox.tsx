import { Box, Image, Flex, Text, Link } from "@chakra-ui/react"
import { ProductInfo } from "@/types";

interface Props {
    productInfo: ProductInfo
}

export default function ProductInfoBox({productInfo}: Props) {

    return (
    <>
    <Box rounded="md" maxW="sm" borderWidth="1px" borderColor="grey.400">
        <Image src={productInfo.imageUrl} alt={productInfo.imageAlt} />
        <Box p="4" spaceY="2">
        <Text textStyle="l" fontWeight="medium" color="fg">{productInfo.brand}: {productInfo.productName}</Text>

        <Flex justify="center" align="center" padding={2}>
            <Link variant="underline" href={productInfo.link} colorPalette="pink" alignItems="center">Purchase Link</Link>
        </Flex>
        
        <Text color="fg" textAlign="left">Category: {productInfo.category}</Text>
        <Text color="fg" textAlign="left">Price: {productInfo.price}</Text>
        <Text color="fg" textAlign="left">Country of Origin: {productInfo.countryOfOrigin}</Text>
        { (productInfo.description !== "") ? <Text color="fg">Description: {productInfo.description}</Text> : <></> }
        </Box>
    </Box>
    </>
    );
    
}