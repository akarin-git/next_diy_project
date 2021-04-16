import {
  Table,
  Thead,
  Tr,Td,Th,
  Tbody,
  Tfoot,
  Container,
  useColorModeValue,
  Text,Flex
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
      <Text pt={10} >材料</Text>
      </Flex>

        <Table variant="unstyled" my={{base:"10",md:"30"}} bg="gray.100">
        <Thead >
            <Tr>
                  <Th>材料</Th>
                  <Th>単位</Th>
                  <Th isNumeric>数量</Th>
            </Tr>
        </Thead>
        <Tbody>
            <Tr>
                  <Td>{post[0].materialA}</Td>
                  <Td>{post[0].amountA} cm</Td>
                  <Td isNumeric>25.4こ</Td>
            </Tr>
             {/* 2----------------------------------- */}
            {/* 条件分岐 */}
                {post[0].materialB ? (
                <Tr>
                    <Td>{post[0].materialB}</Td>
                    <Td>{post[0].amountB} (cm)</Td>
                    <Td isNumeric>30.48こ</Td>
                </Tr>
                ) : (
                    <></>
                )} 
            {/* 3-------------------------------------- */}
                {post[0].materialC ? (
                <Tr>
                    <Td>{post[0].materialC}</Td>
                    <Td>{post[0].amountC} (cm)</Td>
                    <Td isNumeric>30.48こ</Td>
                </Tr>
                ) : (
                    <></>
                )} 
            {/* 4-------------------------------------- */}
                {post[0].materialD ? (
                <Tr>
                    <Td>{post[0].materialD}</Td>
                    <Td>{post[0].amountD} (cm)</Td>
                    <Td isNumeric>30.48こ</Td>
                </Tr>
                ) : (
                    <></>
                )} 
            {/* 5-------------------------------------- */}
                {post[0].materialE ? (
                <Tr>
                    <Td>{post[0].materialE}</Td>
                    <Td>{post[0].amountE} (cm)</Td>
                    <Td isNumeric>30.48こ</Td>
                </Tr>
                ) : (
                    <></>
                )} 
            {/* 6-------------------------------------- */}
                {post[0].materialF ? (
                <Tr>
                    <Td>{post[0].materialF}</Td>
                    <Td>{post[0].amountF} (cm)</Td>
                    <Td isNumeric>30.48こ</Td>
                </Tr>
                ) : (
                    <></>
                )} 
            {/* 7-------------------------------------- */}
                {post[0].materialG ? (
                <Tr>
                    <Td>{post[0].materialG}</Td>
                    <Td>{post[0].amountG} (cm)</Td>
                    <Td isNumeric>30.48こ</Td>
                </Tr>
                ) : (
                    <></>
                )} 
          
             </Tbody>
        </Table>

        {/* ------------------------------------------------------------- */}

        <Flex px="3">
         <Image
            width={70} 
            height={70}
            src={'https://res.cloudinary.com/dk2uwbtnl/image/upload/v1618453937/Tools_perspective_matte_eikpyb.png'}
        />

      <Text pt={10} px={6}>道具</Text>
      </Flex>

        <Table variant="unstyled" my={{base:"10",md:"30"}} bg="gray.100">
        <Thead >
            <Tr>
                  <Th>道具</Th>
                  <Th>数量</Th>
                 
            </Tr>
        </Thead>
        <Tbody>
            <Tr>
                  <Td>{post[0].goodsA}</Td>
                  <Td>{post[0].amountA} cm</Td>
                  
            </Tr>
             {/* ----------------------------------- */}
                {post[0].goodsB ? (
                <Tr>
                    <Td>{post[0].goodsB}</Td>
                    <Td>{post[0].amountB} (cm)</Td>
                </Tr>
                ) : (
                    <></>
                )} 
            {/* -------------------------------------- */}
                {post[0].goodsC ? (
                <Tr>
                    <Td>{post[0].goodsC}</Td>
                    <Td>{post[0].amountC} (cm)</Td>
                </Tr>
                ) : (
                    <></>
                )} 
            {/* -------------------------------------- */}
                {post[0].goodsD ? (
                <Tr>
                    <Td>{post[0].goodsD}</Td>
                    <Td>{post[0].amountD} (cm)</Td>
                </Tr>
                ) : (
                    <></>
                )} 
            {/* -------------------------------------- */}
                {post[0].goodsE ? (
                <Tr>
                    <Td>{post[0].goodsE}</Td>
                    <Td>{post[0].amountE} (cm)</Td>
                </Tr>
                ) : (
                    <></>
                )} 
            {/* -------------------------------------- */}
                {post[0].goodsF ? (
                <Tr>
                    <Td>{post[0].goodsF}</Td>
                    <Td>{post[0].amountF} (cm)</Td>
                </Tr>
                ) : (
                    <></>
                )} 
            {/* -------------------------------------- */}
                {post[0].goodsG ? (
                <Tr>
                    <Td>{post[0].goodsG}</Td>
                    <Td>{post[0].amountG} (cm)</Td>
                </Tr>
                ) : (
                    <></>
                )} 
            </Tbody>
         </Table>
        </>
    )
}
