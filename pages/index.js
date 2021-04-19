import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Layout from '../components/Layout';
import Spring from '../components/Spring';
import FormInfoModal from '../components/Base/FormInfoModal';
import TopFeature from '../components/Base/TopFeature';
import {
   Box,Flex,Text,
   InputGroup,
   InputLeftAddon,
   Input,InputLeftElement
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";




export default function Home() {

  return (
    <>
      <Head>
        <title>Fab Loop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>

      <Box
        bg="#f8f8ff"
        pt="20"
        display={["none","none","flex"]}
        alignItems="center"
        justifyContent="space-between"
      >
      <Box
        w={["100%","50%","40%"]}
        h="auto"
        pt={["5","10","20"]}
        pl={["5","5","5","10"]}
      >
       <FormInfoModal/>
      <Text fontSize="70" >
        search
      </Text>
      <Box my="10" mx="20px">
       <InputGroup >
        <InputLeftElement
          pointerEvents="none"
          children={<AiOutlineSearch color="gray.300" />}
        />
        <Input type="tel" placeholder="Recipe Serch" />
      </InputGroup>
      </Box>
   
      </Box>
      <Spring />
      </Box>

      {/* mobile用 */}
      <Box 
        display={["inline","inline","none"]}
      >
     
      <Box
      py="100"
       bgImage="url('https://res.cloudinary.com/dk2uwbtnl/image/upload/v1618740072/wed/blob_1_kq9pr5.svg')"
       bgRepeat="no-repeat"
       bgPosition="right"
       >
      <Flex>
       <Text w="70%" align="center">
       テキスト
       </Text>
      

      <Image
       src={'https://res.cloudinary.com/dk2uwbtnl/image/upload/c_scale,h_384/v1618539570/wed/Tools_perspective_matte_s_lqe2ko.png'}
      width={100}
       height={100}
      />
      </Flex>

       <Text fontSize="30" ml="30">
        search
      </Text>
      <Box my="2">
       <InputGroup bg="white">
        <InputLeftElement
          pointerEvents="none"
          children={<AiOutlineSearch color="gray.300" />}
        />
        <Input type="tel" placeholder="Recipe Serch" />
      </InputGroup>
       <FormInfoModal/>
      </Box>
      </Box>
      </Box>


      <Box bg="#f5f5f5" >
      <TopFeature/>
      </Box>


      </Layout>

     
       
    </>
  );
}
