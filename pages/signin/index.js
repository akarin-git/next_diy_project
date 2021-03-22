import SigninForm from '../../components/SigninForm';
import { useAppRouter,useAppAxiosExecute} from "../../hooks";

export const getServerSideProps = async (context) => ({
    props:{
        layout:true
    }
})

// const [
//     {data,error,loading:signingIn},
//         signWithToken,
// ] = useAppAxiosExecute({
//     url:"/api/oauth/token",
//     method:"POST",
//     errorMessage:"メールアドレスが存在しないか、パスワードが間違っています",
// });

// useEffect(() => {
//    if(data && process.browser){
//        window.localStorage.setItem("hanly_access_token",data.access_token);
//        router.push("/")
//    }
// }, [data])

export default function SignUp() {
    const [router] = useAppRouter();

    const signIn = async({ email,password }) => {
        console.log("post");
        // signWithToken({
        //     grant_type:"password",
        //     client_id:process.env.API_CLIENT_ID,
        //     client_secret:process.env.API_CLIENT_SECRET,
        //     scope:"*",
        //     username:email,
        //     password,
        // });
    }

    return (
        <>
        <SigninForm
            onSubmit={signIn}
            // isSending={signingIn}
        />
        {/* {error && <p className="error">{error}</p>} */}
        </>
    )
}
