import { Button, Container, Flex, FormErrorMessage } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { db } from "../../../firebase";
import { collection, addDoc, getDoc } from "firebase/firestore";

function Chit() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    organizationname: Yup.string().required("Organizationname is required"),
    mobile: Yup.string().required("mobile is required"),
    email: Yup.string()
      .required(" Email is required")
      .email("Email is invalid"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [name, setname] = useState("");
  const [organization, setorganization] = useState("");
  const [mobile, setmoblie] = useState("");
  const [email, setemail] = useState("");

  const usersCollectionRef = collection(db, "ownerdetails");

  const onSubmit = async (data) => {
    await addDoc(usersCollectionRef, {
      name: name,
      organization: organization,
      mobile: mobile,
      email: email,
    });
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
        <Container>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              placeholder=" Enter the Name"
              {...register("name")}
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <div className="invalid-feedback">{errors.name?.message}</div>
          </FormControl>
          <FormControl>
            <FormLabel>Organization name</FormLabel>
            <Input
              type="text"
              placeholder="Enter the Organization name"
              {...register("organizationname")}
              className={`form-control ${
                errors.organizationname ? "is-invalid" : ""
              }`}
              onChange={(e) => {
                setorganization(e.target.value);
              }}
            />
            <div className="invalid-feedback">
              {errors.organizationname?.message}
            </div>
          </FormControl>
          <FormControl>
            <FormLabel>Mobile</FormLabel>
            <Input
              type="number"
              placeholder="9876543210"
              {...register("mobile")}
              className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
              onChange={(e) => {
                setmoblie(e.target.value);
              }}
            />
            <div className="invalid-feedback">{errors.mobile?.message}</div>
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="chits@gmail.com"
              {...register("email")}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </FormControl>
          <br />
          <Button type="sunmit" colorScheme="blue">
            SingIn
          </Button>
        </Container>
      </Flex>
    </form>
  );
}

export default Chit;
