import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Text,
} from "@chakra-ui/react";
import { auth } from "../../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React from "react";
import { useState } from "react";

function login() {
  const [registeremail, setregisteremail] = useState("");
  const [registerpassword, setregisterpassword] = useState("");
  const [loginemail, setloginemail] = useState("");
  const [loginpassword, setloginpassword] = useState("");

  const [User, setUser] = useState("");
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registeremail,
        registerpassword
      );
      console.log(user);
    } catch (errors) {
      console.log(errors.message);
    }
  };
  const login = async () => {
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
    <div>
      <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
        <Container>
          <Text fontSize="3xl" textAlign="center">
            Register User
          </Text>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              onChange={(e) => {
                setregisteremail(e.target.value);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>password</FormLabel>
            <Input
              type="password"
              onChange={(e) => {
                setregisterpassword(e.target.value);
              }}
            />
          </FormControl>
          <br />
          <Button
            type="submit"
            colorScheme="blue"
            size="lg"
            marginLeft="160px"
            onClick={register}
          >
            createUser
          </Button>
          <br />
          <Text fontSize="3xl" textAlign="center">
            Login
          </Text>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              onChange={(e) => {
                setloginemail(e.target.value);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>password</FormLabel>
            <Input
              type="password"
              onChange={(e) => {
                setloginpassword(e.target.value);
              }}
            />
          </FormControl>

          <br />
          <Button
            type="submit"
            colorScheme="blue"
            size="lg"
            marginLeft="160px"
            onClick={login}
          >
            Login
          </Button>
          <Button
            type="Submit"
            colorScheme="facebook"
            size="lg"
            marginRight="360px"
            onChange={logout}
          >
            Signout
          </Button>
        </Container>
      </Flex>
    </div>
  );
}

export default login;
