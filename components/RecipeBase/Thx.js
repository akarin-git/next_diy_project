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
        <Container >
            <Text fontSize="3xl" align="right" m="10">Thx 👋</Text>

             <Box w="full" >
            <Flex>
             <Spacer />
             <Box w="50" align="center">
                 <Icon as={HiHeart} w={8} h={8} color="red.500" />
                 <Text fontSize="sm">
                 いいね
                 </Text>
             </Box>
             <Box w="50">
                 <Icon as={FaStar} w={8} h={8} color="red.500" />
             </Box>
             <Box w="50">
                 <Icon as={FaShareSquare} w={8} h={8} color="red.500" />
             </Box>
            </Flex>
             </Box>
        </Container>
    )
}
