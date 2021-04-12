import {
  Container,
  Box,
  Text
} from "@chakra-ui/react";

export default function RecipeStep() {
    return (
        <>
           <Container maxW="2xl" my="20">
           <Box my="10">
           <Text>
           1 step
           </Text>
            <Box padding="5" bg="gray.100" maxW="3xl">
                There are many benefits to a joint design and development system. Not only
                does it bring benefits to the design team.
            </Box>
            </Box>
           <Box my="10">
           <Text>
           2 step
           </Text>
            <Box padding="5" bg="gray.100" maxW="3xl">
                There are many benefits to a joint design and development system. Not only
                does it bring benefits to the design team.
            </Box>
            </Box>
           <Box my="10">
           <Text>
           3 step
           </Text>
            <Box padding="5" bg="gray.100" maxW="3xl">
                There are many benefits to a joint design and development system. Not only
                does it bring benefits to the design team.
            </Box>
            </Box>
            </Container> 
        </>
    )
}
