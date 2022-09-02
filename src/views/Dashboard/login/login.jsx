import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import React from "react";
import { useState } from "react";
import Card from "components/Card/Card";

function login() {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required(" Email is required")
      .email("Email is invalid"),
    password: Yup.string().required("Password is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [loginemail, setloginemail] = useState("");
  const [loginpassword, setloginpassword] = useState("");

  const [User, setUser] = useState("");

  const onSubmit = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginemail,
        loginpassword
      );
      console.log(user);
    } catch (errors) {
      console.log(errors.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
        <Container>
          <Card>
            <Text fontSize="3xl" textAlign="center">
              LogIn
            </Text>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter the Email"
                {...register("email")}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                onChange={(e) => {
                  setloginemail(e.target.value);
                }}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter the Password"
                {...register("password")}
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                onChange={(e) => {
                  setloginpassword(e.target.value);
                }}
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </FormControl>
            <br />
            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              marginLeft="360px "
              onClick={onsubmit}
            >
              LogIn
            </Button>
            <br />
            <Link to="./create">Click me! Create user</Link>
          </Card>
        </Container>
      </Flex>
    </form>
  );
}

export default login;
