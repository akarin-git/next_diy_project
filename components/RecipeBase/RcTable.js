import {
  Table,
  Thead,
  Tr,Td,Th,
  Tbody,
  Tfoot,
  Container,
  useColorModeValue,
  Text,Flex,Heading
} from "@chakra-ui/react";
import Image from 'next/image';


export default function RcTable({post}) {
    return (
        <>
        <Flex>
         <Image
            width={100} 
            height={100}
            src={'https://res.cloudinary.com/dk2uwbtnl/image/upload/v1618460964/Desk_lamp_perspective_matte_1_m4qgv0.png'}
        />
      <Heading size="md" pt={10} mt="4" fontWeight="bold" color="#708090">材料</Heading>
      </Flex>

        <Table variant="unstyled" my={{base:"10",md:"30"}} bg="gray.100">
        <Thead >
            <Tr>
                  <Th pl="10">材料</Th>
                  <Th isNumeric>数量</Th>
            </Tr>
        </Thead>
        <Tbody>
            <Tr>
                  <Td pl="10">{post[0].materialA}</Td>
                  <Td isNumeric>{post[0].maAnum}</Td>
            </Tr>
             {/* 2----------------------------------- */}
            {/* 条件分岐 */}
                {post[0].materialB ? (
                <Tr>
                    <Td pl="10">{post[0].materialB}</Td>
                    <Td isNumeric>{post[0].maBnum}</Td>
                </Tr>
                ) : (
                    <></>
                )} 
            {/* 3-------------------------------------- */}
                {post[0].materialC ? (
                <Tr>
                    <Td pl="10">{post[0].materialC}</Td>
                    <Td isNumeric>{post[0].maCnum}</Td>
                </Tr>
                ) : (
                    <></>
                )} 
            {/* 4-------------------------------------- */}
                {post[0].materialD ? (
                <Tr>
                    <Td pl="10">{post[0].materialD}</Td>
                    <Td isNumeric>{post[0].maDnum}</Td>
                </Tr>
                ) : (
                    <></>
                )} 
            {/* 5-------------------------------------- */}
                {post[0].materialE ? (
                <Tr>
                    <Td pl="10">{post[0].materialE}</Td>
                    <Td isNumeric>{post[0].maEnum}</Td>
                </Tr>
                ) : (
                    <></>
                )} 
            {/* 6-------------------------------------- */}
                {post[0].materialF ? (
                <Tr>
                    <Td pl="10">{post[0].materialF}</Td>
                    <Td isNumeric>{post[0].maFnum}</Td>
                </Tr>
                ) : (
                    <></>
                )} 
            {/* 7-------------------------------------- */}
                {post[0].materialG ? (
                <Tr>
                    <Td pl="10">{post[0].materialG}</Td>
                    <Td isNumeric>30.48こ</Td>
                </Tr>
                ) : (
                    <></>
                )} 
          
             </Tbody>
        </Table>

        {/* ------------------------------------------------------------- */}

        <Flex px="3" mt="20">
         <Image
            width={80} 
            height={80}
            src={'https://res.cloudinary.com/dk2uwbtnl/image/upload/v1618453937/Tools_perspective_matte_eikpyb.png'}
        />

        <Heading size="md" pt={10} ml="6" fontWeight="bold" color="#708090">道具</Heading>

      </Flex>

        <Table variant="unstyled" my={{base:"10",md:"30"}} bg="gray.100">
        <Thead >
            <Tr>
                  <Th pl="10">道具</Th>
                 
            </Tr>
        </Thead>
        <Tbody>
            <Tr>
                  <Td pl="10">{post[0].goodsA}</Td>
                  
            </Tr>
             {/* ----------------------------------- */}
                {post[0].goodsB ? (
                <Tr>
                    <Td pl="10">{post[0].goodsB}</Td>
                </Tr>
                ) : (
                    <></>
                )} 
            {/* -------------------------------------- */}
                {post[0].goodsC ? (
                <Tr>
                    <Td pl="10">{post[0].goodsC}</Td>
                </Tr>
                ) : (
                    <></>
                )} 
            {/* -------------------------------------- */}
                {post[0].goodsD ? (
                <Tr>
                    <Td pl="10">{post[0].goodsD}</Td>
                </Tr>
                ) : (
                    <></>
                )} 
            {/* -------------------------------------- */}
                {post[0].goodsE ? (
                <Tr>
                    <Td pl="10">{post[0].goodsE}</Td>
                </Tr>
                ) : (
                    <></>
                )} 
            {/* -------------------------------------- */}
                {post[0].goodsF ? (
                <Tr>
                    <Td pl="10">{post[0].goodsF}</Td>
                </Tr>
                ) : (
                    <></>
                )} 
            {/* -------------------------------------- */}
                {post[0].goodsG ? (
                <Tr>
                    <Td pl="10">{post[0].goodsG}</Td>
                </Tr>
                ) : (
                    <></>
                )} 
            </Tbody>
         </Table>
        </>
    )
}
