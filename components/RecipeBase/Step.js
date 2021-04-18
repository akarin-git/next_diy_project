import {
  Box,Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from "@chakra-ui/react";

export default function Step({post}) {
    // console.log(post[0]);
    return (
        <>
        <Alert status="success" >
        <Box ml="10">
            <AlertIcon />
        </Box>
                <Text mr="5" fontWeight="bold">{post[0].difficult}</Text>
                    <Text fontWeight="bold">
                       {post[0].step}
                    </Text>
            {/* <AlertIcon />
            <Box flex="1">
                <AlertTitle>Esey!</AlertTitle>
                    <AlertDescription display="block">
                        
                </AlertDescription>
            </Box> */}
            </Alert>
        </>
    )
}
