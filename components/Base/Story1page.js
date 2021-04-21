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
        <Box w="85%" m="auto" mb="10" bg="#e6e6fa" p="10" borderRadius="20px">

           {/* 子要素 */}
        
        <Box p={["0","0","5"]}>
        <Flex>
        <Box w="50%" display={["none","block"]}>
        <Image
            src={'https://res.cloudinary.com/dk2uwbtnl/image/upload/c_scale,h_384/v1618539570/wed/Tools_perspective_matte_s_lqe2ko.png'}
            width={150}
            height={150}
        />
        </Box>
        <Box mb="5">
        <Text mb="3">
        <p>カテゴリから簡単に</p>
        <p>DIY Recipeにアクセス。</p>
        </Text>

        <Text>
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
