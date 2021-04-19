import localStorage from "store2";
import { useAppContext, useAppRouter } from "../../hooks";
import useMe from "../../lib/users";
import Layout from '../../components/Layout';
import Loader from "../../components/Base/Loader";
import MeTabs from '../../components/UserBase/MeTabs';
import MeTopCard from '../../components/UserBase/MeTopCard';

import {Box,Button} from "@chakra-ui/react";


export default function index() {
 const [router] = useAppRouter();
  const { me, refreshMe } = useMe();
//  console.log(me);
  
 const logout = () => {
    localStorage("Fab_loop_token", "");
    refreshMe(undefined);
    router.push("/");
  };

  
    return (
        <div>
        <Layout>
        {!me && <Loader />}
          {!!me && (
              <Box>
                <MeTopCard me={me}/> 
            <Box w={["100%","100%","80%"]} m="auto" p="2">
                <MeTabs me={me}/>
            </Box>
            </Box>
          )}
    <Box align="center">
      <Button isTxt onClick={logout} w="auto">
        ログアウト
      </Button>
      </Box>
      </Layout>
        </div>
    )
}

