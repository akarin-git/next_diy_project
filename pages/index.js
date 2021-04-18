import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Layout from '../components/Layout';
import Spring from '../components/Spring';
import { Box,Flex} from "@chakra-ui/react";




export default function Home() {



   
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <Flex mt="40">
      <Box m="200" >
      .
      </Box>
      <Spring />
      </Flex>
      </Layout>
     
    </>
  );
}
