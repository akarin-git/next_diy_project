import { 
        Text,Stack,
        Grid,Box,Input,
        NumberInput,
        NumberInputField,
        NumberIncrementStepper,
        NumberDecrementStepper,
        NumberInputStepper,
        RadioGroup,Button,
        Radio,Select,
        Textarea,Flex,
        Container,Spacer,
        Heading,Tag
} from "@chakra-ui/react";
import { BiListCheck } from "react-icons/bi";
import { useState } from 'react';
import Image from 'next/image';



export default function PostRecipeForm({onSubmit}) {
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [subtitle, setSubTitle] = useState("");
    const [web_page,setWebPage] = useState("");
    const [image_path, setImagePath] = useState("");
    const [step, setStep] = useState("");
    const [hour, setHour] = useState("1");
    const [difficult, setDifficult] = useState("1");
    const [descriptionA,setDescriptionA] = useState("");
    const [descriptionB,setDescriptionB] = useState("");
    const [descriptionC,setDescriptionC] = useState("");
    const [descriptionD,setDescriptionD] = useState("");
    const [descriptionE,setDescriptionE] = useState("");
    const [materialA,setMaterialA] = useState("");
    const [materialB,setMaterialB] = useState("");
    const [materialC,setMaterialC] = useState("");
    const [materialD,setMaterialD] = useState("");
    const [materialE,setMaterialE] = useState("");
    const [maAnum,setMaANum] = useState("");
    const [maBnum,setMaBNum] = useState("");
    const [maCnum,setMaCNum] = useState("");
    const [maDnum,setMaDNum] = useState("");
    const [maEnum,setMaENum] = useState("");
    const [goodsA,setGoodsA] = useState("");
    const [goodsB,setGoodsB] = useState("");
    const [goodsC,setGoodsC] = useState("");
    const [goodsD,setGoodsD] = useState("");
    const [goodsE,setGoodsE] = useState("");
    // const [goAnum,setGoANum] = useState("");
    // const [goBnum,setGoBNum] = useState("");
    // const [goCnum,setGoCNum] = useState("");
    // const [goDnum,setGoDNum] = useState("");
    // const [goEnum,setGoENum] = useState("");

    const submit = (e) => {
        // alert('hi');
        // console.log(
        //     category,title,subtitle,
        //     web_page,image_path,step,hour,comment,difficult,
        //     descriptionA,descriptionB,
        //     descriptionC,descriptionD,descriptionE,
        //     materialA,materialB,materialC,materialD,materialE,
        //     maAnum,maBnum,maCnum,maDnum,maEnum,
        //     goodsA,goodsB,goodsC,goodsD,goodsE,
        //     // goAnum,goBnum,goCnum,goDnum,goEnum
        // );
        e.preventDefault();
        onSubmit({　
            category,title,subtitle,
            web_page,image_path,step,hour,difficult,
            descriptionA,descriptionB,
            descriptionC,descriptionD,descriptionE,
            materialA,materialB,materialC,materialD,materialE,
            maAnum,maBnum,maCnum,maDnum,maEnum,
            goodsA,goodsB,goodsC,goodsD,goodsE,
            // goAnum,goBnum,goCnum,goDnum,goEnum
         });
    }


    return (
        <Container py="40">
        <Box w="80%" align="center"　pt="100" m="auto">
           
        <form onSubmit={submit}>
        <Heading as="h2" size="xl" align="left" ml="5" color="#708090">
            Intro
        </Heading>
       
        <Box align="right" my="10">
          <Select
            bg="#4682b4"
            borderColor="#4682b4"
            color="white"
            placeholder="category"
            w="40%"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
          <option value="craft">craft</option>
          <option value="handmade">handmade</option>
          <option value="家具">家具</option>
          <option value="option2">outdoor</option>
          </Select>
        </Box>
        <Box>

            {/* タイトル */}
           
            <Text align="left" mb="3" ml="2" color="#696969">Title <Tag color="red" bg="none">*</Tag></Text> 
            <Input
              variant="filled"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            /> 
           

            {/* サブタイトル */}
            <Text align="left" my="3" ml="2" color="#696969">SubTitle <Tag color="red" bg="none">*</Tag></Text> 
            <Input
             variant="filled" 
             placeholder="SubTitle" 
             value={subtitle}
            　onChange={(e) => setSubTitle(e.target.value)}
            />
          
            {/* website */}
            <Text align="left" my="3" ml="2" color="#696969">WebSite</Text> 
            <Input
             variant="filled"
             placeholder="WebSite"
             value={web_page}
             onChange={(e) => setWebPage(e.target.value)}
            />

            {/* 写真 */}
            <Text align="left" my="3" ml="2" color="#696969">写真 <Tag color="red" bg="none">*</Tag></Text> 
            <Input
            　multiple
            　accept="image/*"
             variant="filled"
             placeholder="画像"
             type="file"
             name="image_path"
             onChange={(e) => setImagePath(e.target.files[0])}
            />
          {/* <input
                multiple
                accept="image/*"
                name="image_path"
                placeholder="画像"
                type="file"
                onChange={handleChange}
            /> */}
        </Box>

            {/* line */}
             <Box my="20">
                <Image
                    src="https://res.cloudinary.com/dk2uwbtnl/image/upload/v1619066114/wed/lineyellow_a3awdz.png"
                    width="600"
                    height="30"
                />
            </Box>

             <Heading as="h2" size="xl" align="left" ml="5" color="#708090">
                説明
            </Heading>

             <Box align="right" my="10">
            {/* ステップ */}
            <Tag color="red" bg="none">*</Tag>
            <Select
                bg="#4682b4"
                borderColor="#4682b4"
                color="white"
                placeholder="step数"
                w="40%"
                value={step}
                onChange={(e) => setStep(e.target.value)}
            >
                <option value="1step">1step</option>
                <option value="2step">2step</option>
                <option value="3step">3step</option>
                <option value="4step">4step</option>
            </Select>
            {/* 難しさ */}
            <Tag color="red" bg="none">*</Tag>
            <Select
                bg="#4682b4"
                borderColor="#4682b4"
                color="white"
                placeholder="難しさ"
                w="40%"
                mt="1"
                value={difficult}
                onChange={(e) => setDifficult(e.target.value)}
            >
                <option value="easy">easy</option>
                <option value="少し難しい">少し難しい</option>
                <option value="難しい">難しい</option>
                <option value="上級者">上級者</option>
            </Select>
            <Flex align="right" mt="5">
             <Spacer />
             <NumberInput 
                size="md" 
                maxW={20} 
                defaultValue={1} 
                min={1} 
                mx="5"
                value={hour}
                onChange={(value)=>setHour(value)}
            >
            <NumberInputField />
            <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            
            <Text mt="4">hコース<Tag color="red" bg="none">*</Tag></Text>
            </Flex>

            </Box> 


            {/* 説明 */}
            <Text align="left" my="3" ml="2" color="#696969">説明１ <Tag color="red" bg="none">*</Tag></Text> 
            <Textarea
                placeholder="説明1　(例) 木を20cm幅に切る"
                size="sm"
                h={300}
                value={descriptionA}
                onChange={(e) => setDescriptionA(e.target.value)}
            />
            {/* 説明 */}
            <Text align="left" my="3" ml="2" color="#696969">説明２</Text> 
            <Textarea
                placeholder="説明2　(例) 木を20cm幅に切る"
                size="sm"
                h={300}
                value={descriptionB}
                onChange={(e) => setDescriptionB(e.target.value)}
            />
            {/* 説明 */}
            <Text align="left" my="3" ml="2" color="#696969">説明３</Text> 
            <Textarea
                placeholder="説明3　(例) 木を20cm幅に切る"
                size="sm"
                h={300}
                value={descriptionC}
                onChange={(e) => setDescriptionC(e.target.value)}
            />
            {/* 説明 */}
            <Text align="left" my="3" ml="2" color="#696969">説明４</Text> 
            <Textarea
                placeholder="説明4　(例) 木を20cm幅に切る"
                size="sm"
                h={300}
                value={descriptionD}
                onChange={(e) => setDescriptionD(e.target.value)}
            />
            {/* 説明 */}
            <Text align="left" my="3" ml="2" color="#696969">説明５</Text> 
            <Textarea
                placeholder="説明5　(例) 木を20cm幅に切る"
                size="sm"
                h={300}
                value={descriptionE}
                onChange={(e) => setDescriptionE(e.target.value)}
            />



            {/* line */}
             <Box my="20">
                <Image
                    src="https://res.cloudinary.com/dk2uwbtnl/image/upload/v1619066114/wed/lineyellow_a3awdz.png"
                    width="600"
                    height="30"
                />
            </Box>

             <Heading as="h2" size="xl" align="left" ml="5" color="#708090" mb="20">
                材料
            </Heading>

            <Box>

            {/* 材料1 */}
           <Grid templateColumns="repeat(2, 1fr)" gap={8}>
            <Text align="left" my="3" ml="2" color="#696969">
                材料 
            </Text> 
             <Text align="left" my="3" color="#696969"　pr="14" align="right">
                数量
            </Text> 
            </Grid>
            
            <Box align="left">
            <Tag color="red" bg="none">*</Tag>
            </Box>
            <Flex >
            <Input
             variant="filled"
             placeholder="材料1"
             type="text"
             w="90%"
             value={materialA}
             onChange={(e) => setMaterialA(e.target.value)}
            />
             {/* 数量 プルダウン*/}
            <NumberInput 
                size="md" 
                maxW={20} 
                defaultValue={1} 
                min={1} 
                mx="5"
                value={maAnum}
                onChange={(value)=>setMaANum(value)}
            >
            <NumberInputField />
            <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            </Flex>
            
            {/* 材料2 */}
            <Flex mt="5">
            <Input
             variant="filled"
             placeholder="材料2"
             type="text"
             w="90%"
             value={materialB}
             onChange={(e) => setMaterialB(e.target.value)}
            />
             {/* 数量 プルダウン*/}
             <NumberInput 
                size="md" 
                maxW={20} 
                defaultValue={1} 
                min={1} 
                mx="5"
                value={maBnum}
                onChange={(value)=>setMaBNum(value)}
            >
            <NumberInputField />
            <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            </Flex>

            {/* 材料3 */}
            <Flex mt="5">
            <Input
             variant="filled"
             placeholder="材料3"
             type="text"
             w="90%"
             value={materialC}
             onChange={(e) => setMaterialC(e.target.value)}
            />
             {/* 数量 プルダウン*/}
             <NumberInput 
                size="md" 
                maxW={20} 
                defaultValue={1} 
                min={1} 
                mx="5"
                value={maCnum}
                onChange={(value)=>setMaCNum(value)}
            >
            <NumberInputField />
            <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            </Flex>

            {/* 材料4 */}
            <Flex mt="5">
            <Input
             variant="filled"
             placeholder="材料4"
             type="text"
             w="90%"
             value={materialD}
             onChange={(e) => setMaterialD(e.target.value)}
            />
             {/* 数量 プルダウン*/}
            <NumberInput 
                size="md" 
                maxW={20} 
                defaultValue={1} 
                min={1} 
                mx="5"
                value={maDnum}
                onChange={(value)=>setMaDNum(value)}
            >
            <NumberInputField />
            <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            </Flex>

            {/* 材料5 */}
            <Flex mt="5">
            <Input
             variant="filled"
             placeholder="材料5"
             type="text"
             w="90%"
             value={materialE}
             onChange={(e) => setMaterialE(e.target.value)}
            />
            {/* 数量 プルダウン*/}
             <NumberInput 
                size="md" 
                maxW={20} 
                defaultValue={1} 
                min={1} 
                mx="5"
                value={maEnum}
                onChange={(value)=>setMaENum(value)}
            >
            <NumberInputField />
            <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            </Flex>
            </Box>
           

             {/* line */}
             <Box my="20">
                <Image
                    src="https://res.cloudinary.com/dk2uwbtnl/image/upload/v1619066114/wed/lineyellow_a3awdz.png"
                    width="600"
                    height="30"
                />
            </Box>

             <Heading as="h2" size="xl" align="left" ml="5" color="#708090"　mb="20">
                道具
            </Heading>

            {/* 道具1 */}
            <Box align="left">
            <Tag color="red" bg="none">*</Tag>
            </Box>
            <Input
             variant="filled"
             placeholder="道具1"
             type="text"
             w="100%"
             value={goodsA}
             onChange={(e) => setGoodsA(e.target.value)}
            />

            {/* 道具2 */}
             {/* <Flex mt="5"> */}
            <Input
             variant="filled"
             placeholder="道具2"
             type="text"
             w="100%"
             mt="5"
             value={goodsB}
             onChange={(e) => setGoodsB(e.target.value)}
            />
            {/* 数量 プルダウン*/}
             {/* <NumberInput 
                size="md" 
                maxW={20} 
                defaultValue={1} 
                min={1} 
                mx="5"
                value={goBnum}
                onChange={(value)=>setGoBNum(value)}
            >
            <NumberInputField />
            <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            </Flex> */}

            {/* 道具3 */}
            <Input
             variant="filled"
             placeholder="道具3"
             type="text"
             w="100%"
             mt="5"
             value={goodsC}
             onChange={(e) => setGoodsC(e.target.value)}
            />
            

            {/* 道具4 */}
            <Input
             variant="filled"
             placeholder="道具4"
             type="text"
             w="100%"
             mt="5"
             value={goodsD}
             onChange={(e) => setGoodsD(e.target.value)}
            />
            

            {/* 道具5 */}
            <Input
             variant="filled"
             placeholder="道具5"
             type="text"
             w="100%"
             mt="5"
             value={goodsE}
             onChange={(e) => setGoodsE(e.target.value)}
            />
           
            <Box my="20" align="right" w="full">
             <Button
              size="lg"
              rightIcon={<BiListCheck />}
              colorScheme="purple"
              onClick={submit}
              >
                書き込む
            </Button>
            </Box>
            </form>
        </Box>
        </Container>
    )
}


        {/* <Flex mx="20"> */}

            {/* 単位 checkbox*/}
            {/* <RadioGroup defaultValue="1" my="auto">
            <Stack spacing={4} direction="row">
                <Radio value="1" isDisabled>
                       cm
                </Radio>
            <Radio value="2"> m </Radio>
            </Stack>
            </RadioGroup> */}
            {/* </Flex> */}


           