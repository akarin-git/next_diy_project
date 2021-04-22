import { Grid,Box,Flex,Image } from "@chakra-ui/react";
import FormInfoModal from './FormInfoModal';
import CategoryBtn from './CategoryBtn';


export default function TopCatchBar() {
    return (
        <div>
            <Flex  w={["100%","100%","80%"]} m="auto">
            <Flex align="center" w="100%" m="auto">
            <Box display={["none","none","block"]} m="auto" w="50%">
             <Image
                src="https://res.cloudinary.com/dk2uwbtnl/image/upload/v1619015205/wed/Frame_1391_nopppy.png"
                alt="Picture of the author"
                width={["200","300"]}
                height={["200","300"]}
                m="auto"
            />
            </Box>
            <Box display={["none","none","block"]} w="50%" ml="20">
                 <FormInfoModal/>
                <CategoryBtn/>
            </Box>
            </Flex>
            
            </Flex>

            {/* mobile design */}
            <Box display={["block","block","none"]} w="100%" align="center">
            <Image
                src="https://res.cloudinary.com/dk2uwbtnl/image/upload/c_scale,w_431/v1618994555/wed/Saly-12_fnlnk1.png"
                alt="Picture of the author"
                width={["200","300"]}
                height={["200","300"]}
            />
                 <CategoryBtn/>
            </Box>
        </div>
    )
}
