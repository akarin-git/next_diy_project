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
        <>
            <Link href={`/`}>
             <Button variant="ghost">
                <Icon as={HiChevronLeft} w={8} h={8} color="glay.500" />
                <Text>back</Text>
            </Button>
            </Link>
            <Container w="full" align="center">
            <Box>
                <Image src={'https://res.cloudinary.com/dk2uwbtnl/image/upload/v1615205052/undraw_Location_search_re_ttoj_t2ffi8.png'} width={570} height={340}/>
            <Link href={`/signin`}>
                <Box mb={["5","0"]}>
                <Text align="center" fontSize="xl">
                    login ?
                </Text>
                <Text align="center" fontSize="sm">
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
        </>
    )
}
