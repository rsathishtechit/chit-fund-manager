import React from "react";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Text,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { auth } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "components/Card/Card";
function Create() {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required(" Email is required")
      .email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(10, "Password must not exceed 10 characters"),
    confirmpassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
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
  const [confirmpassword, setconfirmpassword] = useState("");

  const onSubmit = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        confirmpassword
      );
      console.log(user);
    } catch (errors) {
      console.log(errors.message);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
        <Container>
          <Card>
            <Text fontSize="3xl" textAlign="center">
              Register User
            </Text>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter the Email"
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
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </FormControl>
            <FormControl>
              <FormLabel>Confirm password</FormLabel>
              <Input
                type="password"
                placeholder="Enter the confirmpassword"
                {...register("confirmpassword")}
                className={`form-control ${
                  errors.confirmpassword ? "is-invalid" : ""
                }`}
                onChange={(e) => {
                  setconfirmpassword(e.target.value);
                }}
              />
              <div className="invalid-feedback">
                {errors.confirmpassword?.message}
              </div>
            </FormControl>
            <br />
            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              marginLeft="320px"
            >
              Register
            </Button>
            <br />
            <Link to="./login">
              Login <span>page</span>
            </Link>
          </Card>
        </Container>
      </Flex>
    </form>
  );
}

export default Create;
