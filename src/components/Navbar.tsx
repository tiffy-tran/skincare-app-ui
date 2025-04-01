import { Box, Flex, HStack, Button } from "@chakra-ui/react";
import { ColorModeButton } from '@/components/ui/color-mode';

import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <Box bg="transparent" borderWidth="5px" borderColor="transparent">
      <Flex h={16} alignItems="center" justifyContent="space-between" px={4}>
        <Box flex="1" />

        <HStack spacing={4}>
            <Button asChild variant="ghost" size="lg" _hover={{ bg: "pink.600", color: "white" }}>
              <NavLink to="/" end>Current Product List</NavLink>
            </Button>
            <Button asChild variant="ghost" size="lg" _hover={{ bg: "pink.600", color: "white" }}>
              <NavLink to="/stash">Stash List</NavLink>
            </Button>
            <Button asChild variant="ghost" size="lg" _hover={{ bg: "pink.600", color: "white" }}>
              <NavLink to="/historicalProductlist">Historical Product List</NavLink>
            </Button>
        </HStack>

        <Box flex="1" display="flex" justifyContent="flex-end">
          <ColorModeButton />
        </Box>
      </Flex>
    </Box>
    </>
  );
}
