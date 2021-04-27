import { TwitterShareButton,TwitterIcon, FacebookShareButton, FacebookIcon } from 'react-share'
import { Box,Flex} from "@chakra-ui/react";

export default function ShereBtn({post}) {
    // console.log(post[0]);
    return (
        <Flex>
      <Box mr="3">
       <TwitterShareButton url={`${process.env.SITE_URL}recipe/${post[0].id}`} title={post[0].title}>
        <TwitterIcon size={32} round={true}/>
       </TwitterShareButton>
       </Box>
       <Box mr="2">
       <FacebookShareButton url={`${process.env.SITE_URL}recipe${post[0].id}`}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      </Box>
        </Flex>
    )
}
