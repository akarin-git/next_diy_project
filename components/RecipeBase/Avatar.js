import { 
    Avatar,
    AvatarBadge,
    AvatarGroup,
    Flex,
    Spacer,
    Text,
    Box,
    Icon
} from "@chakra-ui/react";
import { HiHeart } from "react-icons/hi";

export default function AvatarBag() {
    return (
        <Box mb="2" w="100%" align="right">
            <Flex>
            <Spacer />
                <Text fontSize="md" align="right" p="1" py="6" color="gray.500">
                    name
                </Text>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            </Flex>
              <Flex>
                 <Spacer />
                 <Icon as={HiHeart} w={5} h={5} color="red.500" />
                 <Text fontSize="sm" align="right" p="1">
                 56　favorite
                 </Text>
            <Text p="2">
            2020-10-10 
           </Text>
             </Flex>
        </Box>
    )
}

// import React from 'react'

// export const FavoBag() {
//     return (
//         <div>
//         </div>
//     )
// }
