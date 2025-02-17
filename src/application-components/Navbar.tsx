import {
  Box,
  Flex,
  HStack,
  Button
} from "@chakra-ui/react";
import { ColorModeButton } from '@/components/ui/color-mode';

import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <Box bg="blue.500" px={10}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box color="#f893ff" fontWeight="bold" fontSize="lg">
          TODO: put app name here or some QOTD or some other daily thing here
        </Box>
        <HStack as="nav" display={{ base: "none", md: "flex" }}>
          <nav>
            <Button asChild colorScheme="whiteAlpha" variant="ghost">
              <NavLink to="/" end>Homepage</NavLink>
            </Button>
            <Button asChild colorScheme="whiteAlpha" variant="ghost">
              <NavLink to="/calendar" end>Calendar</NavLink>
            </Button>
            <Button asChild colorScheme="whiteAlpha" variant="ghost">
              <NavLink to="/stash">Stash List</NavLink>
            </Button>
            <Button asChild colorScheme="whiteAlpha" variant="ghost">
              <NavLink to="/allTimeProductList">All Time Product List</NavLink>
            </Button>
          </nav>
        </HStack>
        <ColorModeButton />
      </Flex>
    </Box>
    </>
  );
}
