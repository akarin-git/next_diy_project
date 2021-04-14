import {
  Table,
  Thead,
  Tr,Td,Th,
  Tbody,
  Tfoot,
  Container
} from "@chakra-ui/react";

export default function RcTable({post}) {
    return (
        <>
        <Table variant="unstyled" my={{base:"10",md:"30"}} bg="gray.100">
        <Thead >
            <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
            </Tr>
        </Thead>
        <Tbody>
            <Tr>
                  <Td>{post[0].favorite.length}</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                  <Td isNumeric>0.91444</Td>
            </Tr>
        </Tbody>
        <Tfoot>
            <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
            </Tr>
        </Tfoot>
        </Table>
        </>
    )
}
