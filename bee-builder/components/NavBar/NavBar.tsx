import { Box, Text } from "@chakra-ui/react";
import React from "react";

const NavBar = () => {
  return (
    <Box w="100%" h="42px" p={4} boxShadow="sm">
      <Text fontSize="3xl">🐝 BeeBuilder</Text>
    </Box>
  );
};

export default NavBar;
