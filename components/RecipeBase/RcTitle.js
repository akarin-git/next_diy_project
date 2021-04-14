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



export default function RcTitle({post}) {
   // console.log(post.title);
    return (
        <>
           <Box>
                {/* タイトル */}
                <Badge variant="outline" m="2" colorScheme="purple">
                   {post[0].category}
                </Badge>
                <motion.div variants={imageVariants}>
                 <Text fontSize="4xl" mx="3">
                    {post[0].title}
                 </Text>
                 </motion.div>

          {/* icon avater set */}
          <AvatarBag post={post}/>
          {/* サブタイトル */}
           <SubTitle/>
           {/* ステップカード */}
           <Step/>

            <Box m="10"/>
          </Box>
        </>
    )
}
