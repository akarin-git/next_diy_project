import { Container,Flex,Box } from "@chakra-ui/react"


export default function HeadLayout() {

    return (
        <>
           <Container className="bgimage" w="100%" h="100%" >
            <Flex alignItems="center" justifyContent="space-between" mx="auto">
               <Box w="70%">
               hi
               </Box>
               <Box w="30%" h="200px" bg="red">
               hi
               </Box>
            </Flex>
            </Container> 
           
            <style JSX>
                {`
                .bgimage{
                    // background:url(https://res.cloudinary.com/dk2uwbtnl/image/upload/v1615208465/background02_xx7sj9.png);
                    // background-repeat: no-repeat;
                    background-color:pink;
                }
                `}
            </style>
        </>
    )
}
