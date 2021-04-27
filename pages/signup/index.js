import Layout from '../../components/Layout';
import SignupForm from '../../components/SignupForm';
import { useAppRouter,useAppAxiosExecute } from "../../hooks";
import Link from 'next/link';
import Image from 'next/image';
import { HiChevronLeft } from "react-icons/hi";
import { Container,Button,Icon,Text,Box } from "@chakra-ui/react";


export default function SignUp() {
const [router] = useAppRouter();
const [{loading,error},signUp] = useAppAxiosExecute({
    method:"POST",
    url:"/api/user/signup",
    errorMessage:"登録済みのメールアドレス",
});

const submit = async({name,email,password,role}) => {
    console.log("post");
    await signUp({name,email,password,role});
    router.push("/signin");
};

    return (
        <Box bg="#f0f8ff">
            <Link href={`/`}>
             <Button variant="ghost">
                <Icon as={HiChevronLeft} w={8} h={8} color="glay.500" />
                <Text>back</Text>
            </Button>
            </Link>
            <Container w="full" align="center">
            <Box>
                <Image src={'https://res.cloudinary.com/dk2uwbtnl/image/upload/v1619509425/wed/login_pykoqk.png'} width={240} height={250}/>
            <Link href={`/signin`}>
                <Box mb={["1","0"]} pr="10" _hover={{ color: 'pink' }}>
                <Text align="right" fontSize="md" fontWeight="bold">
                    login ?
                </Text>
                <Text align="right" fontSize="sm">
                    ログインはこちらから
                </Text>
                </Box>
            </Link>
            </Box>
                <SignupForm
                    onSubmit={submit}
                    isSending={loading}
                />
            {error && <p className="error">{error}</p>}
            </Container>
        </Box>
    )
}
