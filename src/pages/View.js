import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  ChakraProvider,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
} from "@chakra-ui/react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { onValue, ref } from "firebase/database";
import { fireDb } from "../firebase";

const View = () => {
  const [state, setState] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const contactsRef = ref(fireDb, `contacts/${id}`);
    onValue(contactsRef, (snapshot) => {
      const data = snapshot.val();
      setState(data || {});
    });
  }, [id]);
  return (
    <>
      <ChakraProvider>
        <Card
          className="
        container mt-4"
          maxW="sm"
        >
          <CardBody>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Name:- {state.name}</Heading>
              <Text>{state.email}</Text>
              <Text color="blue.600" fontSize="2xl">
                Contact:- {state.contact}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter className="mx-auto">
            <Link to="/home">
              <Button variant="solid" colorScheme="blue">
                Back
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </ChakraProvider>
    </>
  );
};

export default View;
