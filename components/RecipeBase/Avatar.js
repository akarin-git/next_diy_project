import Link from 'next/link';
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

export default function AvatarBag({post}) {
    // console.log(post[0]);
    return (
        <Box mb="2" w="100%" align="right">
            <Link href={`/mypage`}>
            <Flex>
            <Spacer />
                <Text fontSize="md" align="right" p="1" py="6" color="gray.500">
                   text {post[0].user_id}
                </Text>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" mx="4"/>
            </Flex>
            </Link>
              <Flex>
                 <Spacer />
                 <Icon as={HiHeart} w={4} h={4} color="red.500" />
                 <Text fontSize="sm" align="right" my="2">
                  {post[0].favorite.length}　favorite
                 </Text>
            <Text p="2"　fontSize="sm">
            / {post[0].created_at}
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
