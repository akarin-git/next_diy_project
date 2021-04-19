import { getAllUserIds,getUserData } from '../../lib/users';
import { useRouter } from 'next/router';
import { API_ENDPOINT } from '../../constants';
import { useEffect } from 'react';
import useSWR from 'swr';

import Layout from '../../components/Layout';
import MainNav from '../../components/MainNav';
import UserTopCard from '../../components/UserBase/UserTopCard';
import FormTest from '../../components/UserBase/FormTest';
import UserTabs from '../../components/UserBase/UserTabs';
import {
Box
} from "@chakra-ui/react";


const fetcher = (url) => fetch(url).then((res) => res.json());

export default function userpage({staticUser,id}) {
//  console.log(staticUser);
    const router = useRouter();
    // swr
    const { data:user ,mutate } = useSWR(
        `${API_ENDPOINT}/api/user/${id}`,
        fetcher,
        {
            initialData:staticUser,
        }
    );
    // console.log(user);
    useEffect(() => {
        mutate();
    },[]);

     if (router.isFallback || !user) {
    return <div>Loading...</div>;
  }

    return (
        <div>
            <Layout>
            <Box py="7">
            </Box>
            <UserTopCard user={user}/> 
            <Box w={["100%","100%","80%"]} m="auto" p="2">
            <UserTabs user={user}/>
            </Box>
            </Layout>
        </div>
    )
}

export async function getStaticPaths() {
  const paths = await getAllUserIds();
//   console.log(paths);
  return {
    paths,
    fallback: true,
  };
}

// ISR
export async function getStaticProps({ params }){
    // console.log(params.id);
    const {user:staticUser} = await getUserData(params.id);
    // console.log(staticUser);
    return {
        props:{
            id:staticUser[0].id,
            staticUser:staticUser,
        },
        revalidate:3,
    };
}