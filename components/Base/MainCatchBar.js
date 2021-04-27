import { Grid,Box,Flex,Image } from "@chakra-ui/react";
import FormInfoModal from './FormInfoModal';
import CategoryBtn from './CategoryBtn';
import { motion } from 'framer-motion';
import { imageVariants,smallreverseVariants } from "../Animetion/MotionBase"


export default function MainCatchBar() {
    return (
        <div>
            <Flex  w={["100%","100%","80%"]} m="auto">
            <Flex align="center" w="100%" m="auto">
            <Box display={["none","none","block"]} m="auto" w="50%" mb="10">
            <motion.div variants={smallreverseVariants}>
             <Image
                src="https://res.cloudinary.com/dk2uwbtnl/image/upload/v1619497671/wed/topcatch2_oxo094.png"
                alt="Picture of the author"
                width={["200","300"]}
                height={["200","300"]}
                m="auto"
            />
            </motion.div>
            </Box>
            <Box display={["none","none","block"]} w="50%" ml="20">
                 <FormInfoModal/>
                <CategoryBtn/>
            </Box>
            </Flex>
            
            </Flex>

            {/* mobile design */}
            <Box display={["block","block","none"]} w="100%" align="center" pb="10">
            <Image
                src="https://res.cloudinary.com/dk2uwbtnl/image/upload/v1619497671/wed/topcatch2_oxo094.png"
                alt="Picture of the author"
                width={["200","300"]}
                height={["200","300"]}
            />
                 <CategoryBtn/>
            </Box>
        </div>
    )
}
