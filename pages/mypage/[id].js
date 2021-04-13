import MainNav from '../../components/MainNav';
import UserTopCard from '../../components/UserBase/UserTopCard';
import FormTest from '../../components/UserBase/FormTest';
import UserTabs from '../../components/UserBase/UserTabs';
import {
Box
} from "@chakra-ui/react";



export default function mypage() {

    return (
        <div>
            <MainNav/>
            <Box py="7">
            </Box>
            <UserTopCard/> 
            <Box w={["100%","100%","70%"]} m="auto" p="2">
            <UserTabs/>
            </Box>
        </div>
    )
}
