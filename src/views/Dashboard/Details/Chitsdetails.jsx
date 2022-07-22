// Chakra imports
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
          <FormLabel>ChitName</FormLabel>
          <Input type="text" placeHolder="Enter the ChitName" />
        </FormControl>
        <FormControl>
          <FormLabel>ChitType</FormLabel>
          <Select
            placeHolder="Select option"
            backgroundColor="gray.800"
            textColor="GrayText"
          >
            <option value="/">--type--</option>
            <option value="option1">Monthly</option>
            <option value="option2">2-Monthly once</option>
            <option value="option3">3-monthly once</option>
          </Select>
        </FormControl>
        <FormLabel>StartDate</FormLabel>
        <Input
          placeHolder="Select Date and Time"
          size="md"
          backgroundColor="gray.800"
          type="datetime-local"
          textColor="GrayText"
        />

        <FormLabel>No of Chits</FormLabel>
        <NumberInput>
          <NumberInputField placeHolder="Number of Chits" />
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
            backgroundColor="gray.800"
            type="datetime-local"
            textColor="GrayText"
          />
        </FormControl>
        <FormLabel>TotalAmount</FormLabel>
        <NumberInput>
          <NumberInputField placeHolder="Number of TotalAmount" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormLabel>ExtraChit</FormLabel>
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
