import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Container,
  Select,
  Textarea,
  Flex,
} from "@chakra-ui/react";
function Member() {
  return (
    <>
      <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
        <Container>
          <FormControl>
            <FormLabel>Mobile</FormLabel>
            <Input type="number" placeholder="Enter the Mobile" />
          </FormControl>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder="Enter the Name" />
          </FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea placeholder="Here is a sample placeholder" />
          <FormControl>
            <FormLabel>Payment</FormLabel>
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </FormControl>
          <br />
          <Button colorScheme="blue">Submit</Button>
        </Container>
      </Flex>
    </>
  );
}

export default Member;
