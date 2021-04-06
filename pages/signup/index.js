import Layout from '../../components/Layout';
import SignupForm from '../../components/SignupForm';
import Button from '../../components/Base/Button';
import { useAppRouter,useAppAxiosExecute } from "../../hooks";


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
            <SignupForm
                onSubmit={submit}
                isSending={loading}
            />
            {error && <p className="error">{error}</p>}
        </>
    )
}
