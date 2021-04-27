import {
   Box,Flex,Text,Heading,
   InputGroup,Button,
   InputLeftAddon,
   Input,InputLeftElement,
   Grid,chakura
} from "@chakra-ui/react";
import Image from 'next/image';
import TopFeature from './TopFeature';
import { motion } from 'framer-motion';
import { smreverseVariants } from "../Animetion/MotionBase"


export default function CardSecond() {
    return (
        <div>
      <Box bg="#f8f8ff" py={["10","20"]} m="auto">
      <Box w="80%" m="auto" align="center" my="20">
      <motion.div variants={smreverseVariants}>
      <Heading size="lg" fontSize={["30","30","40"]} color="#696969" mb="2">
        FabLoop のサービス
      </Heading>
      </motion.div>
      <Image
        src="https://res.cloudinary.com/dk2uwbtnl/image/upload/v1619023988/wed/Ellipse_2_yjlhbr.png"
        alt="Picture of the author"
        width={400}
        height={15}
        /> 
      </Box>
      {/* PC */}
     <Flex>
      <Box m="auto" w="80%" display={["none","none","block"]}>
        <Image
         src="https://res.cloudinary.com/dk2uwbtnl/image/upload/v1619023033/wed/Device_Mashups_kgdb7y.png"
        width="800"
        height="400"
        />
      </Box>
      <Box w="60%" m="auto" display={["none","none","block"]}>
      <Text fontWeight="bold" fontSize="xl">
      <p>見つけにくいものづくりの情報が</p>
      <p>すぐに見つけられる。</p>
      </Text>
      </Box>
      </Flex>

      {/* mobile */}
      <Box m="auto" w="100%" display={["block","block","none"]}>
        <Image
         src="https://res.cloudinary.com/dk2uwbtnl/image/upload/v1619023033/wed/Device_Mashups_kgdb7y.png"
         alt="Picture of the author"
        width={620}
        height={350}
        m="auto"
        />
      </Box>
       <Box w="90%" mt="10" mx="auto" align="center" display={["block","block","none"]}>
        <Text fontWeight="bold" fontSize="xl" color="#696969">
          <p>見つけにくいものづくりの情報が</p>
          <p>すぐに見つけられる。</p>
        </Text>
      </Box>

      </Box>
      <Box bg="#f5f5f5" >
      <TopFeature/>
      </Box>
        </div>
    )
}
