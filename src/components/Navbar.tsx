import { Box, Flex, HStack, Button, LinkOverlay, Link } from "@chakra-ui/react";
import { ColorModeButton } from '@/components/ui/color-mode';

import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <Box bg="blue.500" px={10}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack as="nav" display={{ base: "none", md: "flex" }}>
          <nav>
            <Button asChild colorScheme="whiteAlpha" variant="ghost">
              <NavLink to="/" end>Homepage</NavLink>
            </Button>
            {/* TODO not adding calendar for now 
            <Button asChild colorScheme="whiteAlpha" variant="ghost">
              <NavLink to="/calendar" end>Calendar</NavLink>
            </Button> */}
            <Button asChild colorScheme="whiteAlpha" variant="ghost">
              <NavLink to="/stash">Stash List</NavLink>
            </Button>
            <Button asChild colorScheme="whiteAlpha" variant="ghost">
              <NavLink to="/historicalProductlist">Historical Product List</NavLink>
            </Button>
          </nav>
        </HStack>
        <ColorModeButton />
      </Flex>
    </Box>
    </>
  );
}
