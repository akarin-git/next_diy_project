import {
   Box,Flex,Text,
   Spacer,Avatar,Tag,TagLabel
} from "@chakra-ui/react";
import Image from 'next/image';

export default function Story3page() {
    return (
          <>
          {/* 親要素 */}
        <Box w="90%" m="auto" mb="10" bg="#fffacd" color="#535354" p="3" borderRadius="20px">
        
        <Box p={["0","0","5"]}>

        {/* mobile */}
        <Box w="90%" display={["block","none"]} ml="3" align="center" ml="10">
        <Image
            src={'https://res.cloudinary.com/dk2uwbtnl/image/upload/v1619508233/wed/story2_deyga4.png'}
            width={200}
            height={200}
        />
        </Box>

        {/* PC */}
        <Flex>
        <Box w="50%" display={["none","block"]} ml="10" py="5" align="center">
          <Image
            src={'https://res.cloudinary.com/dk2uwbtnl/image/upload/v1619508233/wed/story2_deyga4.png'}
            width={290}
            height={230}
          />
        </Box>
        <Box mb="5" m="auto">
          <Text mb="3" fontWeight="bold">
           <p>自分のDIYのレシピを</p>
           <p>投稿してシェアしよう！</p>
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
