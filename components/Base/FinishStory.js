import {
   Box,Flex,Text,
   Spacer,Avatar,Tag,TagLabel
} from "@chakra-ui/react";

import Image from 'next/image';

export default function FinishStory() {
    return (
        <div>
            <Box w="80%" align="center" bg="pink" m="auto" py="10">
            <Text my={["0","10"]}>
            Enjoy 
            </Text>
            <Image
            src={'https://res.cloudinary.com/dk2uwbtnl/image/upload/c_scale,h_384/v1618539570/wed/Tools_perspective_matte_s_lqe2ko.png'}
            width={150}
            height={150}
        />
            </Box>
        </div>
    )
}
