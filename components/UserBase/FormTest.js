import { Tabs, TabList, TabPanels, Tab, TabPanel,Box } from "@chakra-ui/react"
import Input from '../Base/Input';
import { useState } from 'react';

export default function FormTest({onSubmit}) {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const submit = (e) => {
        alert('hi');
        e.preventDefault();
        console.log(email,password);
        onSubmit({ email,password });
       
    }

    return (
        <div>
        <Tabs variant="soft-rounded" colorScheme="green" align="left" w="full" py="10" >
            <form onSubmit={submit}>
          <Box h="500">
            <TabPanels h="300">
                    <TabPanel>
                            <p>one!</p>
                         <Input
                value={email}
                placeholder="メールアドレス"
                type="email"
                onChange={setEmail}
            /> 
                    </TabPanel>
                    <TabPanel>
                            <p>two!</p>

                              <Input
                value={password}
                placeholder="パスワード"
                type="password"
                onChange={setPassword}
            /> 
            <button>submit</button>
                    </TabPanel>
            </TabPanels>
              <TabList >
                    <Tab>step1</Tab>
                    <Tab>step2</Tab>
            </TabList>
            </Box>
            </form>
        </Tabs>
        </div>
    )
}
