import Layout from '../../components/Layout';
import SignupForm from '../../components/SignupForm';
import Button from '../../components/Base/Button';
import { useAppRouter,useAppAxiosExecute } from "../../hooks";

// レイアウトありはtrueにすることでlayout style適用する
export const getServerSideProps = async (context) => ({
    props:{
        layout:true
    }
})


export default function SignUp() {
// const [router] = useAppRouter();
// const [{loading,error},signUp] = useAppAxiosExecute({
//     method:"POST",
//     url:"/api/signup",
//     errorMessage:"登録済みのメールアドレス",
// });

// const submit = async({name,email,password,role}) => {
//     // console.log(name,email,password,role);
//     await signUp({name,email,password,role});
//     router.push("/signin");
// };

    return (
        <>
            <SignupForm
                onSubmit={submit}
                // isSending={loading}
            />
            {/* {error && <p className="error">{error}</p>} */}
        </>
    )
}
