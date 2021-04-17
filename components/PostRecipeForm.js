import { 
        Text,Stack,
        Grid,Box,Input,
        NumberInput,
        NumberInputField,
        NumberIncrementStepper,
        NumberDecrementStepper,
        NumberInputStepper,
        RadioGroup,
        Radio,Select,
        Textarea,Flex,
        Container
} from "@chakra-ui/react";
import React from 'react';


export default function PostRecipeForm() {
    const [resize, setResize] = React.useState("horizontal")
    const [textoption, setTextoption] = React.useState("horizontal")

    return (
        <Container>
        <Box w="80%" align="center"　pt="100" m="auto">
            {/* カテゴリーcheckbox */}
        
        <Box align="right">
        <Text>カテゴリー</Text>
          <Select
            bg="tomato"
            borderColor="tomato"
            color="white"
            placeholder="category"
            w="40%"
          >
          <option value="craft">craft</option>
          <option value="handmade">handmade</option>
          <option value="家具">家具</option>
          <option value="option2">Option 2</option>
          </Select>
        </Box>
        <Box>

            {/* タイトル */}
        <Input variant="filled" placeholder="Title"/>

            {/* サブタイトル */}
        <Input variant="filled" placeholder="SubTitle" />
          
            {/* website */}
            <Input variant="filled" placeholder="WebSite" />

            {/* 写真 */}
            <Input variant="filled" placeholder="image" type="file"/>

            {/* ステップ */}
            <Select variant="filled" placeholder="step" >
                <option value="1step">1step</option>
                <option value="2step">2step</option>
                <option value="3step">3step</option>
                <option value="4step">4step</option>
                <option value="5step">5step</option>
            </Select>
        </Box>

             <Box m="20">
            -------------------------------
            </Box>

            {/* 説明 */}
            <Textarea
                placeholder="Here is a sample placeholder"
                size="sm"
                resize={resize}
                h={300}
            />
            {/* 説明 */}
            <Textarea
                placeholder="Here is a sample placeholder"
                size="sm"
                resize={resize}
                h={300}
            />
            {/* 説明 */}
            <Textarea
                placeholder="Here is a sample placeholder"
                size="sm"
                resize={resize}
                h={300}
            />



            <Box m="20">
            -------------------------------
            </Box>


            {/* 材料 */}
            <Input variant="filled" placeholder="材料" type="text"/>

            {/* 数量 プルダウン*/}
            <Text>数量</Text>
            <Flex>
            <NumberInput size="sm" maxW={20} defaultValue={15} min={10}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>

            {/* 単位 checkbox*/}
            <RadioGroup defaultValue="1">
            <Stack spacing={4} direction="row">
                <Radio value="1" isDisabled>
                       cm
                </Radio>
            <Radio value="2">m</Radio>
            <Radio value="3">?</Radio>
            </Stack>
            </RadioGroup>
            </Flex>


            {/* 道具 */}
            <Input variant="filled" placeholder="道具" type="text"/>

            {/* 数量 プルダウン*/}
             <Text>数量</Text>
            <NumberInput size="sm" maxW={20} defaultValue={15} min={10}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>

        </Box>
        </Container>
    )
}
