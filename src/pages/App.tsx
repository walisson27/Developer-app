import React, { useContext } from "react";
import { Box, Container, Flex, Spinner, Text } from "@chakra-ui/react";

import Tables from "../components/Table/index";

import { UsersContext } from "../contexts/usersContext";

export const App = () => {
  const { users } = useContext(UsersContext);

  const columns = React.useMemo(
    () => [
      {
        Header: "Nome",
        accessor: "name",
      },
      {
        Header: "Idade",
        accessor: "age",
      },
    ],
    []
  );

  return (
    <Flex align="center" justify="center" minH="100vh" bgGradient='linear(to-r, #0e0c2f, #5e5e7e)' >
      <Container maxW="4xl" >
        <Flex align="center" justify="center" py={10}>
          {users.length >= 1 ? (
            <Tables columns={columns} data={users} />
          ) : (
            <Box textAlign="center">
              <Spinner size="xl" color="white" />
              <Text mt={4} color="white">
                Aguarde..
              </Text>
            </Box>
          )}
        </Flex>
      </Container>
    </Flex>
  );
};
