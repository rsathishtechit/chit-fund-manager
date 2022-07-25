import { Button, Container, Flex } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { db } from "../../../firebase";
import { collection, addDoc, getDoc } from "firebase/firestore";
function SignUp() {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required(" Email is required")
      .email("Email is invalid"),
    password: Yup.string().required("password is required"),
    newpassword: Yup.string()
      .required("newPassword is required")
      .min(6, "newPassword must be at least 6 characters")
      .max(10, "newPassword must not exceed 10 characters"),
    confirmnewpassword: Yup.string()
      .required("Confirm newpassword is required")
      .oneOf(
        [Yup.ref("newpassword"), null],
        "Confirm newPassword does not match"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const [confirmnewpassword, setconfirmnewpassword] = useState("");

  const usersCollectionRef = collection(db, "signup");

  const onSubmit = async (data) => {
    await addDoc(usersCollectionRef, {
      email: email,
      password: password,
      newpassword: newpassword,
      confirmnewpassword: confirmnewpassword,
    });
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
        <Container>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter the email"
              {...register("email")}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter the password"
              {...register("password")}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <div className="invalid-feedback">{errors.password?.message}</div>
          </FormControl>
          <FormControl>
            <FormLabel>New password</FormLabel>
            <Input
              type="password"
              placeholder="Enter the Newpassword"
              {...register("newpassword")}
              className={`form-control ${
                errors.newpassword ? "is-invalid" : ""
              }`}
              onChange={(e) => {
                setnewpassword(e.target.value);
              }}
            />
            <div className="invalid-feedback">
              {errors.newpassword?.message}
            </div>
          </FormControl>
          <FormControl>
            <FormLabel>Confirm Newpassword</FormLabel>
            <Input
              type="Password"
              placeholder="Enter the Confirm NewPassword"
              {...register("confirmnewpassword")}
              className={`form-control ${
                errors.confirmnewpassword ? "is-invalid" : ""
              }`}
              onChange={(e) => {
                setconfirmnewpassword(e.target.value);
              }}
            />
            <div className="invalid-feedback">
              {errors.confirmnewpassword?.message}
            </div>
          </FormControl>
          <br />
          <Button type="submit" colorScheme="blue">
            Sign In
          </Button>
        </Container>
      </Flex>
    </form>
  );
}

export default SignUp;
