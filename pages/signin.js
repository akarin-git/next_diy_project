import SigninForm from '../components/SigninForm';
import { useAppRouter,useAppAxiosExecute} from "../hooks";
import { useEffect } from "react";


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
       router.push("/form")
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
        <SigninForm
            onSubmit={signIn}
            isSending={signingIn}
        />
        {error && <p className="error">{error}</p>}
        </>
    )
}
