// import FormTest from '../components/UserBase/FormTest';
import MypageCard from '../components/UserBase/MypageCard';
import { Flex, Box, } from "@chakra-ui/react"


export default function Test() {

    const submit = async({
        email,password
    }) => {
        console.log(email,password);
    }
    return (
        <div>
            {/* <FormTest onSubmit={submit}/> */}

            <Box w={["80","60"]}>
            <MypageCard/>
            </Box>
        </div>
    )
}
