// Chakra imports
import { Button, Container, Flex } from "@chakra-ui/react";
import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

function Chit() {
  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Container>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder=" Enter the Name" />
        </FormControl>
        <FormControl>
          <FormLabel>OrgName</FormLabel>
          <Input type="text" placeholder="Enter the OrgName" />
        </FormControl>
        <FormControl>
          <FormLabel>MObile</FormLabel>
          <Input type="number" placeholder="Enter the Number" />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter the Email" />
        </FormControl>
        <br />
        <Button colorScheme="blue">SingIn</Button>
      </Container>
    </Flex>
  );
}

export default Chit;
