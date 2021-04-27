import {
   Box,Flex,Text,Heading,
   InputGroup,Button,
   InputLeftAddon,
   Input,InputLeftElement,
   Grid,chakura
} from "@chakra-ui/react";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { imageVariants,smreverseVariants } from "../../components/Animetion/MotionBase";


export default function CardFirst() {
    return (
        <>
            {/* 説明 */}
      <Box bg="#f8f8ff" p={["3","3","10"]}>
      
      <Box w="90%" borderRadius="15" m="auto" p={["3","3","10"]} bg="#CDE8D8"  mt="20">
      <Flex display={["","","flex"]}>
       <Box m="auto" mt="-20" align="center">
       <motion.div variants={smreverseVariants}>
       <Image
         src="https://res.cloudinary.com/dk2uwbtnl/image/upload/v1619490990/wed/topcard2_rlansu.png"
         alt="Picture of the author"
         width={300}
         height={250}
         m="auto"
         mt="-20"
        />
        </motion.div>
        </Box>
       <Box w={["100%","90%","50%"]} m="auto" align="center" bg="#EBFBF1" borderRadius="20" p={["3","3"]} my={["10","10","10"]}>
         <Text fontSize={["md","xl"]} color="#3A5478" fontWeight="bold">
         <p>DIYしてみたいけど難しそう...</p>
         <p>どうやって作るんだろう？が知れる。</p>
         </Text>
        
       </Box>
       </Flex>
       <Flex display={["","","flex"]} mt="5" align="center">
       <Box display={["none","none","block"]} w={["90%","90%","50%"]} h="100" align="center" bg="#EBFBF1" borderRadius="20" p={["3","3"]} my={["10","10","10"]} >
          <Text fontSize="xl" color="#3A5478" fontWeight="bold">
         <p>カテゴリーから自分が探していた</p>
         <p>DIYのレシピをさっと検索</p>
         </Text>
       </Box>
       <Box m="auto" mt="8" align="center">
       <motion.div variants={imageVariants}>
       <Image
         src="https://res.cloudinary.com/dk2uwbtnl/image/upload/v1619490714/wed/card1image_yol4vw.png"
         alt="Picture of the author"
         width={400}
         height={270}
        />
        </motion.div>
        </Box>
         <Box display={["block","block","none"]} w={["90%","90%","50%"]} m="auto" align="center" bg="#EBFBF1" borderRadius="20" p={["3","3"]} my={["10","10","0"]}>
         <Text fontSize="md" color="#3A5478" fontWeight="bold">
         <p>カテゴリーから自分が探していた</p>
         <p>DIYのレシピをさっと検索</p>
         </Text>
       </Box>
       </Flex>
       
      </Box>
      </Box>
        </>
    )
}
