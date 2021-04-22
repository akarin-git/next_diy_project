import {
   Box,Flex,Text,Heading,
   InputGroup,Button,
   InputLeftAddon,
   Input,InputLeftElement,
   Grid,chakura
} from "@chakra-ui/react";
import Image from 'next/image';
import Link from 'next/link';
import { FcInternal } from "react-icons/fc";

export default function TopCallCard() {
    return (
        <>
        <Box mt="10" align="center">
            <Image
                src="https://res.cloudinary.com/dk2uwbtnl/image/upload/v1619057732/wed/Arrows_perspective_matte_1_ye498i.png"
                alt="Picture of the author"
                width={150}
                height={150}
            />
        </Box>

             <Box 
               py="2"
               opacity="90%"
             >
                <Box bgGradient="linear(to-r, #e6e6fa, #ffc0cb)" w="70%" m="auto" my="20" py="10" px="20"　borderRadius="20px"> 
                <Flex>
                <Box display={["none","none","block"]}>
                    <Image 
                        src="https://res.cloudinary.com/dk2uwbtnl/image/upload/v1618748941/wed/iamge_phone_lkoofn.png"
                        width={350} 
                        height={300}
                    />
                </Box>
                <Box 
                  w={["100%","60%","60%"]}
                  h="auto"
                  m="auto"
                >
                 <Heading as="h2" size="xl" color="#4682b4">
                    Let's Try it!
                </Heading>
                <Flex mt="10">
                   <Text
                    ml="6"
                    color="#696969"
                    mt="2"
                    mr="5"
                    display={["none","none","flex"]}
                    >
                        login はこちらから 
                    </Text>
                <Link href="/signin">
                    <Button
                      rightIcon={<FcInternal />}
                      colorScheme="teal"
                      variant="outline"
                      m={["auto",""]}
                    >
                        login
                    </Button>
                </Link>
                </Flex>
                
                </Box>
                </Flex>
            </Box>  
            </Box>  
        </>
    )
}
