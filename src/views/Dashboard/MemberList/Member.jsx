import React, { useState } from "react";
import { useForm } from "react-hook-form";
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
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { db } from "../../../firebase";
import { collection, addDoc } from "firebase/firestore";
function Member() {
  const validationSchema = Yup.object().shape({
    mobilenumber: Yup.string().required(" mobilenumber is required"),
    name: Yup.string().required("name is required"),
    description: Yup.string().required("description is required"),
    payment: Yup.string().required("payment is requied"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [mobilenumber, setmobilenumber] = useState("");
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [payment, setpayment] = useState("");

  const usersCollectionRef = collection(db, "member");

  const onSubmit = async (data) => {
    await addDoc(usersCollectionRef, {
      mobilenumber: mobilenumber,
      name: name,
      description: description,
      payment: payment,
    });
    console.log(JSON.stringify(data, null, 2));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
        <Container>
          <FormControl>
            <FormLabel>Mobile number</FormLabel>
            <Input
              type="number"
              placeholder="9876543210"
              {...register("mobilenumber")}
              className={`form-control ${
                errors.mobilenumber ? "is-invalid" : ""
              }`}
              onChange={(e) => {
                setmobilenumber(e.target.value);
              }}
            />
            <div className="invalid-feedback">
              {errors.mobilenumber?.message}
            </div>
          </FormControl>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter the Name "
              {...register("name")}
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <div className="invalid-feedback">{errors.name?.message}</div>
          </FormControl>

          <FormLabel>Description</FormLabel>
          <Textarea
            {...register("description")}
            className={`form-control ${errors.description ? "is-invalid" : ""}`}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
          <div className="invalid-feedback">{errors.description?.message}</div>

          <FormControl>
            <FormLabel>Payment</FormLabel>
            <Select
              {...register("payment")}
              className={`form-control ${errors.payment ? "is-invalid" : ""}`}
              onChange={(e) => {
                setpayment(e.target.value);
              }}
            >
              <option value="">--payment--</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <div className="invalid-feedback">{errors.payment?.message}</div>
          </FormControl>
          <br />
          <Button type="submit" colorScheme="blue">
            Submit
          </Button>
        </Container>
      </Flex>
    </form>
  );
}

export default Member;
