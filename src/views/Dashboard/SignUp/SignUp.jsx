import { Button, Container, Flex } from "@chakra-ui/react";
import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
function SignUp() {
  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Container>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter the Email" />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter the password" />
        </FormControl>
        <FormControl>
          <FormLabel>ConfirmPassword</FormLabel>
          <Input type="Password" placeholder="Enter the ConfirmPassword" />
        </FormControl>
        <br />
        <Button>SignUp</Button>
      </Container>
    </Flex>
  );
}

export default SignUp;
