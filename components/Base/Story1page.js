import {
   Box,Flex,Text,Button,
   Spacer,Avatar,Tag,TagLabel
} from "@chakra-ui/react";

import Image from 'next/image';
import Link from 'next/link';


export default function Story1page() {
    return (
        <>
        {/* 親要素 */}
        <Box w="90%" m="auto" mb="10" bg="#fffacd" color="#535354" p="3" borderRadius="20px">
        
        <Box p={["0","0","5"]}>

        {/* mobile */}
        <Box w="90%" display={["block","none"]} m="auto" ml="7" my="5">
        <Image
            src={'https://res.cloudinary.com/dk2uwbtnl/image/upload/v1619506860/wed/story1_zjc2ed.png'}
            width={420}
            height={230}
        />
        </Box>

        {/* PC */}
        <Flex>
        <Box w="70%" display={["none","block"]} ml="5" py="5">
          <Image
            src={'https://res.cloudinary.com/dk2uwbtnl/image/upload/v1619506860/wed/story1_zjc2ed.png'}
            width={410}
            height={230}
          />
        </Box>
        <Box mb="5" m="auto">
          <Text mb="3" fontWeight="bold">
           <p>カテゴリから簡単に</p>
           <p>DIY Recipeにアクセス。</p>
          </Text>
        </Box>

        </Flex>
        </Box>
         
       

        {/* 子要素４　右寄せ */}
        {/* <Flex >
        <Spacer/>
        <Link href={`/recipe`}>
         <Button onClick={close}>
        Let't　watch
        </Button>
        </Link>
        </Flex> */}
        </Box>
        </>
    )
}
