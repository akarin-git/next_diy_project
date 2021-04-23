import SigninForm from '../components/SigninForm';
import { useAppRouter,useAppAxiosExecute} from "../hooks";
import { useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { HiChevronLeft } from "react-icons/hi";
import { Container,Button,Icon,Text,Box } from "@chakra-ui/react";

export default function SignUp() {
    const [router] = useAppRouter();

const [
    {data,error,loading:signingIn},
        signWithToken,
] = useAppAxiosExecute({
    url:"/api/oauth/token",
    method:"POST",
    errorMessage:"メールアドレスが存在しないか、パスワードが間違っています",
});

useEffect(() => {
   if(data && process.browser){
       window.localStorage.setItem("Fab_loop_token",data.access_token);
       router.push("/")
   }
}, [data])

    const signIn = async({ email,password }) => {
        console.log("post");
        signWithToken({
            grant_type:"password",
            client_id:process.env.API_CLIENT_ID,
            client_secret:process.env.API_CLIENT_SECRET,
            scope:"*",
            username:email,
            password,
        });
    }

    return (
        <>
        <Link href={`/`}>
            <Button variant="ghost">
                <Icon as={HiChevronLeft} w={8} h={8} color="glay.500" />
                <Text>back</Text>
            </Button>
        </Link>
        
        <Container w="full" align="center">
            <Box mt={["7","6"]}>
              <Image src={'https://res.cloudinary.com/dk2uwbtnl/image/upload/v1615206113/example-25_toyoqb.svg'} width={560} height={320}/>
        <Link href={`/signup`}>
            <Box mb={["1","0"]}>
              <Text align="center" fontSize="xl">
                    Sign Up ?
              </Text>
              <Text align="center" fontSize="sm">
                    新規登録はこちら
              </Text>
            </Box>
        </Link>
            </Box>
        <SigninForm
            onSubmit={signIn}
            isSending={signingIn}
        />
        {error && <p className="error">{error}</p>}
        </Container>
        </>
    )
}
