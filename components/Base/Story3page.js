import {
   Box,Flex,Text,
   Spacer,Avatar,Tag,TagLabel
} from "@chakra-ui/react";
import Image from 'next/image';

export default function Story3page() {
    return (
          <>
          {/* 親要素 */}
        <Box w="90%" m="auto" mb="10" bg="#fffacd" p="3" borderRadius="20px">
        
        <Box p={["0","0","5"]}>

        {/* mobile */}
        <Box w="90%" display={["block","none"]} my="2" align="center" ml="10">
        <Image
            src={'https://res.cloudinary.com/dk2uwbtnl/image/upload/v1619091736/wed/Formimage_eojcla.png'}
            width={230}
            height={230}
        />
        </Box>

        {/* PC */}
        <Flex>
        <Box w="50%" display={["none","block"]} ml="10" align="center">
          <Image
            src={'https://res.cloudinary.com/dk2uwbtnl/image/upload/v1619091736/wed/Formimage_eojcla.png'}
            width={320}
            height={310}
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
