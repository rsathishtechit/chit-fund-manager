import { Flex } from "@chakra-ui/react";
import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Container,
  Select,
  Switch,
} from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

function Chit() {
  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Container>
        <FormControl>
          <FormLabel>Chit name</FormLabel>
          <Input type="text" placeHolder="Enter the Chit name" />
        </FormControl>
        <FormControl>
          <FormLabel>Chit type</FormLabel>
          <Select placeHolder="Select option">
            <option value="/">--type--</option>
            <option value="option1">Monthly</option>
            <option value="option2">2-Monthly once</option>
            <option value="option3">3-monthly once</option>
          </Select>
        </FormControl>
        <FormLabel>Start date</FormLabel>
        <Input
          placeHolder="Select Date and Time"
          size="md"
          type="datetime-local"
        />

        <FormLabel>No of chits</FormLabel>
        <NumberInput>
          <NumberInputField placeHolder="Number of chits" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormControl>
          <FormLabel>Occures in</FormLabel>
          <Input
            placeHolder="Select Date and Time"
            size="md"
            type="datetime-local"
          />
        </FormControl>
        <FormLabel>Total amount</FormLabel>
        <NumberInput>
          <NumberInputField placeHolder="Number of Total amount" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormLabel>Extra chits</FormLabel>
        <Switch id="email-alerts" />
        <FormControl>
          <FormLabel>Amount</FormLabel>
          <Input type="Number" placeHolder="Enter the Amount" />
        </FormControl>
        <br />
        <Button colorScheme="blue">Submit</Button>
      </Container>
    </Flex>
  );
}

export default Chit;
