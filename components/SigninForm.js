// import Input from '../components/Base/Input';
import Button from '../components/Base/Button';
import { useState } from "react";
import { FormLabel,Input,FormControl,Box,Container } from "@chakra-ui/react";


const SigninForm = ({onSubmit,isSending}) =>  {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const submit = (e) => {
        // alert('hi');
        e.preventDefault();
        // console.log(email,password);
        onSubmit({ email,password });
       
    }



    return (
         <Container pb={["20","20","10"]} mt={["10","0"]}>
            <form onSubmit={submit}>
             <Box my={["20","7"]}>
             {/* <Input
                value={email}
                placeholder="メールアドレス"
                type="email"
                onChange={setEmail}
            /> */}
            <FormControl id="email" isRequired>
                <FormLabel>E-mail</FormLabel>
                <Input 
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
             </FormControl>
             {/* <Input
                value={password}
                placeholder="パスワード"
                type="password"
                onChange={setPassword}
            /> */}
            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
             </FormControl>
             </Box>
            <Button className="mts" disabled={isSending}>
            login
            </Button>
        </form>
        </Container>
    )
}

export default SigninForm;