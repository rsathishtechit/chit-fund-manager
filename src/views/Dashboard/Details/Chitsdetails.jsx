import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
// import { db } from "../../../firebase";
// import { collection, addDoc, getDoc } from "firebase/firestore";
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
// import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
function Chit() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(" Name is required"),
    chittype: Yup.string().required("Chittype is required"),
    startdate: Yup.string().required("Startdate is required"),
    confirmnewpassword: Yup.string(),
    noofchits: Yup.string("No of chits is required"),
    occuresin: Yup.string("Occuresion is required"),
    totalamount: Yup.string("Totalamount is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // const [name, setname] = useState("");
  // const [chittype, setchittype] = useState("");
  // const [startdate, setstartdate] = useState("");
  // const [noofchits, setnoofchits] = useState("");
  // const [occuresin, setoccuresin] = useState("");
  // const [totalamount, settotalamount] = useState("");

  // const usersCollectionRef = collection(db, "chitsdatails");

  // const onSubmit = async (data) => {
  //   await addDoc(usersCollectionRef, {
  //     name: name,
  //     chittype: chittype,
  //     startdate: startdate,
  //     noofchits: noofchits,
  //     occuresin: occuresin,
  //     totalamount: totalamount,
  //   });
  //   console.log(JSON.stringify(data, null, 2));
  // };
  const { isOpen, onClose, onOpen } = useDisclosure();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
          <Button
            onClick={onOpen}
            size="md"
            marginLeft="350px"
            colorScheme="blue"
            textAlign="center"
            backgroundColor="Highlight"
          >
            AddChits
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                <ModalCloseButton />
              </ModalHeader>
              <ModalBody>
                <Text fontSize="3xl" textAlign="center">
                  Chits Details
                </Text>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    placeHolder=" Enter the Name"
                    {...register("name")}
                    className={`form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">{errors.name?.message}</div>
                </FormControl>
                <FormControl>
                  <FormLabel>ChitType</FormLabel>
                  <Select
                    placeHolder="Select option"
                    {...register("chittype")}
                    className={`form-control ${
                      errors.chittype ? "is-invalid" : ""
                    }`}
                    // onChange={(e) => {
                    //   setchittype(e.target.value);
                    // }}
                  >
                    <option value="">--payment--</option>
                    <option value="month">month</option>
                    <option value="month 2">month 2</option>
                    <option value="month 3">month 3</option>
                  </Select>
                  <div className="invalid-feedback">
                    {errors.chittype?.message}
                  </div>
                </FormControl>
                <FormLabel>StartDate</FormLabel>
                <Input
                  placeHolder="Select Date and Time"
                  size="md"
                  backgroundColor="#ffffff"
                  type="datetime-local"
                  {...register("startdate")}
                  className={`form-control ${
                    errors.startdate ? "is-invalid" : ""
                  }`}
                  // onChange={(e) => {
                  //   setstartdate(e.target.value);
                  // }}
                />
                <FormLabel>No of Chits</FormLabel>
                <NumberInput>
                  <NumberInputField
                    placeHolder="Number of Chits"
                    {...register("noofchits")}
                    className={`form-control ${
                      errors.noofchits ? "is-invalid" : ""
                    }`}
                    // onChange={(e) => {
                    //   setnoofchits(e.target.value);
                    // }}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                  <div className="invalid-feedback">
                    {errors.noofchits?.message}
                  </div>
                </NumberInput>
                <FormControl>
                  <FormLabel>Occures in</FormLabel>
                  <Input
                    placeHolder="Select Date and Time"
                    size="md"
                    backgroundColor="#ffffff"
                    type="datetime-local"
                    {...register("occuresin")}
                    className={`form-control ${
                      errors.occuresin ? "is-invalid" : ""
                    }`}
                    // onChange={(e) => {
                    //   setoccuresin(e.target.value);
                    // }}
                  />
                  <div className="invalid-feedback">
                    {errors.occuresin?.message}
                  </div>
                </FormControl>
                <FormLabel>TotalAmount</FormLabel>
                <NumberInput>
                  <NumberInputField
                    placeHolder="Number of TotalAmount"
                    {...register("totalamount")}
                    className={`form-control ${
                      errors.totalamount ? "is-invalid" : ""
                    }`}
                    // onChange={(e) => {
                    //   settotalamount(e.target.value);
                    // }}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                  <div className="invalid-feedback">
                    {errors.totalamount?.message}
                  </div>
                </NumberInput>
                <FormLabel>ExtraChit</FormLabel>
                <Switch id="email-alerts" />
                <FormControl>
                  <FormLabel>Amount</FormLabel>
                  <Input
                    type="Number"
                    placeHolder="Enter the Amount"
                    {...register("amount")}
                    className={`form-control ${
                      errors.amount ? "is-invalid" : ""
                    } `}
                    // onChange={(e) => {
                    //   setamount(e.target.value);
                    // }}
                  />
                  <div className="invalid-feedback">
                    {errors.amount?.message}
                  </div>
                </FormControl>
                <br />
                <Button type="submit" colorScheme="blue">
                  Submit
                </Button>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      </Container>
      {/* <Text fontSize="3xl">Chits List</Text>
      <Table>
        <Thead>
          <Tr>
            <Th>Chit Name</Th>
            <Th>Chit Type</Th>
            <Th>Start Date</Th>
            <Th>No of Chits</Th>
            <Th>Occures In</Th>
            <Th>Total Amount</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
        </Tbody>
      </Table> */}
    </form>
  );
}

export default Chit;
