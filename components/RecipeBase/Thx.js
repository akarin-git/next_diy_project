import { motion } from 'framer-motion';
import { imageVariants } from "../Animetion/MotionBase"
import { HiHeart } from "react-icons/hi";
import { FaShareSquare,FaStar } from "react-icons/fa";
import { Container,
        Text,
        Box,
        Flex,
        Icon,
        Spacer 
} from "@chakra-ui/react";

export default function Thx() {
    return (
        <Box w="full" pr={10} mt={10}>
            <Flex>
             <Spacer />
            <Text fontSize="3xl" align="right" mr={10}>Thx 👋</Text>
            
             <Box w="50" align="center" mr={3}>
                 <Icon as={HiHeart} w={6} h={6} color="#dc143c" />
                 <Text fontSize="sm">
                 いいね
                 </Text>
             </Box>
             <Box w="50" align="center" mr={3}>
                 <Icon as={FaStar} w={6} h={6} color="#ffd700" />
                  <Text fontSize="sm">
                 favorite
                 </Text>
             </Box>
             <Box w="50" align="center" >
                 <Icon as={FaShareSquare} w={6} h={6} color="#4169e1" />
                  <Text fontSize="sm">
                 sher
                 </Text>
             </Box>
           </Flex>
        </Box>
    )
}
