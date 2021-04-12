import { Container,Flex } from "@chakra-ui/react"


export default function HeadLayout() {

    return (
        <>
           <Container className="bgimage" w="100%" p="20px">
               hihihi
            </Container> 
           <Container className="bgimage" w="30%" p="20px">
               hihihi
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
