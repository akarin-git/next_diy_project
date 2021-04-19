import { SkeletonCircle,SkeletonText,Container,Box } from "@chakra-ui/react"


export default function Loader() {
    return (
        <Container h="600px">
            <Box padding="6" boxShadow="lg" bg="white">
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
            </Box>

            <Box padding="10" boxShadow="lg" bg="white">
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
            </Box>

          
        </Container>
    )
}
