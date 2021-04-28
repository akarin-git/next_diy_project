import {
  Stack,
  Divider,
  Text
} from "@chakra-ui/react";


export default function SubTitle({post}) {
    // console.log(post[0])
    return (
        <div>
             <Stack direction="row" h="120" p={6} >
                <Divider orientation="vertical" />
                <Text p="5" fontSize={["xs","md","md"]} fontWeight="bold" color="#535354">{post[0].subtitle}</Text>
            </Stack>
        </div>
    )
}
