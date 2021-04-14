import {
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from "@chakra-ui/react";

export default function Step({post}) {
    return (
        <>
        <Alert status="success">
            <AlertIcon />
            <Box flex="1">
                <AlertTitle>Esey!</AlertTitle>
                    <AlertDescription display="block">
                        3hで作れます　3step
                    </AlertDescription>
            </Box>
            <AlertIcon />
            <Box flex="1">
                <AlertTitle>Esey!</AlertTitle>
                    <AlertDescription display="block">
                        3hで作れます　3step
                </AlertDescription>
            </Box>
            </Alert>
        </>
    )
}
