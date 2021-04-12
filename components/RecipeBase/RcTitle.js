import { motion } from 'framer-motion';
import { imageVariants } from "../Animetion/MotionBase"
import AvatarBag from "./Avatar";
import SubTitle from "./SubTitle";
import Step from "./Step";
import {
  Box,
  Text,
  Badge
} from "@chakra-ui/react";



export default function RcTitle() {
    return (
        <>
           <Box>
                {/* タイトル */}
                <Badge variant="outline" m="2" colorScheme="purple">
                   category
                </Badge>
                <motion.div variants={imageVariants}>
                 <Text fontSize="4xl" >
                    titleをここに
                 </Text>
                 </motion.div>

          {/* icon avater set */}
          <AvatarBag/>
          {/* サブタイトル */}
           <SubTitle/>
           {/* ステップカード */}
           <Step/>

            <Box m="10"/>
          </Box>
        </>
    )
}
