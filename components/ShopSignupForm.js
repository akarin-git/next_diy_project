import Input from '../components/Base/Input';
import Button from '../components/Base/Button';
import { useState } from "react";

const ShopSignupForm = ({onSubmit,isSending}) =>  {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const submit = (e) => {
        e.preventDefault();
        console.log(name,email,password);
        onSubmit({ name,email,password});
    }

    return (
        <form onSubmit={submit}>
            <Input
                value={name}
                placeholder="店舗名"
                type="text"
                onChange={setName}
            />
             <Input
                value={email}
                placeholder="メールアドレス"
                type="email"
                onChange={setEmail}
            />
             <Input
                value={password}
                placeholder="パスワード"
                type="password"
                onChange={setPassword}
            />
             
            <Button className="mts" disabled={isSending}>
            新規登録
            </Button>
        </form>
    )
}

export default ShopSignupForm;