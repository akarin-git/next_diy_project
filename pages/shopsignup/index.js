import Layout from '../../components/Layout';
import ShopSignupForm from '../../components/ShopSignupForm';
import Button from '../../components/Base/Button';
import { useAppRouter,useAppAxiosExecute } from "../../hooks";

// レイアウトありはtrueにすることでlayout style適用する
export const getServerSideProps = async (context) => ({
    props:{
        layout:true
    }
})


export default function SignUp() {
const [router] = useAppRouter();
const [{loading,error},signUp] = useAppAxiosExecute({
    method:"POST",
    url:"/api/shop/signup",
    errorMessage:"登録済みのメールアドレス",
});

const submit = async({name,email,password,role}) => {
    console.log("post");
    await signUp({name,email,password,role});
    router.push("/signin");
};

    return (
        <>
            <ShopSignupForm
                onSubmit={submit}
                isSending={loading}
            />
            {error && <p className="error">{error}</p>}
        </>
    )
}
