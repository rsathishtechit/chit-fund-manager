import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Flex,
} from "@chakra-ui/react";
function ChitsList() {
  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <TableContainer>
        <Text fontSize="3xl">Chits List</Text>
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
              <Td>inches</Td>
              <Td>millimetres</Td>
              <Td>25.4</Td>
              <Td>hbhsbd</Td>
              <Td>gugf</Td>
              <Td>4642</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
}

export default ChitsList;
