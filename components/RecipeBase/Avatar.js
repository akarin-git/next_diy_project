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
import { dayjs } from "../../plugins";



export default function AvatarBag({post}) {
    const day = dayjs(post.created_at).format("YYYY/MM/DD HH:mm");
    // console.log(day);
    return (
        <Box mb="3" w="100%" align="right">
            <Link href={`/userpage/${post[0].user_id}`}>
            <Flex>
            <Spacer />
                <Text fontSize="sm" fontWeight="bold" align="right" p="1" pt="6" m="auto" color="gray.500" _hover={{ color: 'pink' }}>
                   {post[0].user.name}
                </Text>
            <Avatar src="https://res.cloudinary.com/dk2uwbtnl/image/upload/v1619488311/wed/ava4_xhuicr.png" mx="2" mb="2"/>
            </Flex>
            </Link>
              <Flex mr="2">
                 <Spacer />
                 <Icon as={HiHeart} w={4} h={4} color="red.500" />
                 <Text fontSize="sm" align="right" my="2">
                  {post[0].favorite.length}　
                 </Text>
                    <Text p="2" mr="2"　fontSize="sm" color="#808080">
                        {day}
                    </Text>
             </Flex>
        </Box>
    )
}

