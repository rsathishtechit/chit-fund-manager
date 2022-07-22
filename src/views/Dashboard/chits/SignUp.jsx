import { Button, Container, Flex } from "@chakra-ui/react";
import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
function SignUp() {
  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Container>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter the email" />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter the password" />
        </FormControl>
        <FormControl></FormControl>
        <FormControl>
          <FormLabel>New password</FormLabel>
          <Input type="password" placeholder="Enter the Newpassword" />
        </FormControl>
        <FormControl>
          <FormLabel>Confirm Newpassword</FormLabel>
          <Input type="Password" placeholder="Enter the Confirm NewPassword" />
        </FormControl>
        <br />
        <Button colorScheme="blue">Sign In</Button>
      </Container>
    </Flex>
  );
}

export default SignUp;
