import { Box } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react"

export default function StashList() {

    return (
      <>
      <SimpleGrid minChildWidth="sm" gap="40px">
        <Box backgroundColor="#e1acfa" height="100%" color="#3a3b3a">
            TODO: picture of product, name, brand, desrciption, ingredients, 
            benefits (affects), link to buy product, current price
        </Box> 
      
        <Box backgroundColor="#5ae7a1" height="100%" color="#3a3b3a">
            another TODO: how to automatically render correct number of boxes based on number of items?
            also, how to lock height and width of boxes?
        </Box> 
        <Box backgroundColor="#33e6ff" height="100%" color="#3a3b3a">
            sample content
        </Box> 
        <Box backgroundColor="#33e6ff" height="100%" color="#3a3b3a">
            sample content
        </Box> 
        <Box backgroundColor="#33e6ff" height="100%" color="#3a3b3a">
            sample content
        </Box> 
        <Box backgroundColor="#33e6ff" height="100%" color="#3a3b3a">
            sample content
        </Box> 
        <Box backgroundColor="#33e6ff" height="100%" color="#3a3b3a">
            sample content
        </Box> 
        <Box backgroundColor="#33e6ff" height="100%" color="#3a3b3a">
            sample content
        </Box> 
        <Box backgroundColor="#33e6ff" height="100%" color="#3a3b3a">
            sample content
        </Box> 
        <Box backgroundColor="#33e6ff" height="100%" color="#3a3b3a">
            sample content
        </Box> 
        <Box backgroundColor="#33e6ff" height="100%" color="#3a3b3a">
            sample content
        </Box> 
      </SimpleGrid>
      </>
    );

}