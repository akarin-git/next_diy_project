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
             <Button variant="ghost">
                <Icon as={HiChevronLeft} w={8} h={8} color="glay.500" />
                <Link href={`/`}>
                <Text>back</Text>
                </Link>
            </Button>
            <Container w="full" align="center">
                <Box >
                <Image src={'https://res.cloudinary.com/dk2uwbtnl/image/upload/v1615205052/undraw_Location_search_re_ttoj_t2ffi8.png'} width={570} height={340}/>
                <Text align="center">
                    login ?
                </Text>
                <Text align="center">
                    ログインはこちらから
                </Text>
                </Box>
                <Box>
                <SignupForm
                    onSubmit={submit}
                    isSending={loading}
                />
            {error && <p className="error">{error}</p>}
                </Box>
            </Container>
        </>
    )
}
