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
         src="https://res.cloudinary.com/dk2uwbtnl/image/upload/v1618739844/wed/bg-19_gruwqw.png"
         alt="Picture of the author"
         width={250}
         height={250}
         m="auto"
         mt="-20"
        />
        </motion.div>
        </Box>
       <Box w={["90%","90%","50%"]} m="auto" align="center" bg="#EBFBF1" borderRadius="20" p={["3","3"]} my={["5","10","0"]}>
         <Text fontSize="xl" color="#3A5478">
         <p>DIYしてみたいけど難しそう...</p>
         <p>どうやって作るんだろう？が知れる。</p>
         </Text>
        
       </Box>
       </Flex>
       <Flex display={["","","flex"]}>
       <Box display={["none","none","block"]} w={["90%","90%","50%"]} h="200" m="auto" align="center" bg="#EBFBF1" borderRadius="20" p={["3","3"]} my={["5","10","10"]}>
          <Text fontSize="xl" color="#3A5478">
         <p>カテゴリーから自分が探していた</p>
         <p>DIYのレシピをさっと検索</p>
         </Text>
       </Box>
       <Box m="auto" mt="8" align="center">
       <motion.div variants={imageVariants}>
       <Image
         src="https://res.cloudinary.com/dk2uwbtnl/image/upload/v1618739907/wed/bg-1_bmbchr.png"
         alt="Picture of the author"
         width={350}
         height={230}
        />
        </motion.div>
        </Box>
         <Box display={["block","block","none"]} w={["90%","90%","50%"]} m="auto" bg="#EBFBF1" borderRadius="20" p={["3","3"]} my={["5","10","0"]}>
         <Text fontSize="2xl" color="#3A5478">(2xl) In love with React & Next</Text>
       </Box>
       </Flex>
       
      </Box>
      </Box>
        </>
    )
}
