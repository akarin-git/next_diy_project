import Input from '../components/Base/Input';
import Button from '../components/Base/Button';
import { useState } from "react";

const SigninForm = ({onSubmit,isSending}) =>  {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const role = 1;

    const submit = (e) => {
        e.preventDefault();
        onSubmit({ name,email,password,role});
    }

    return (
        <form onSubmit={submit}>
            <Input
                value={name}
                placeholder="名前"
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
             <Input
                value="1"
                type="hidden"
            />
            <Button className="mts" disabled={isSending}>
            新規登録
            </Button>
        </form>
    )
}

export default SigninForm;