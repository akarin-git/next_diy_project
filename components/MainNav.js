import TopMenuDown from "./Base/TopMenuDown"
import MenuAccordion from "./Base/MenuAccordion"
import Link from 'next/link'
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,Image
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { rightVariants } from "./Animetion/MotionBase"
import { motion } from 'framer-motion';


export default function MainNav() {
    const bg = useColorModeValue("white", "gray.800");
    const mobileNav = useDisclosure();
  

    return (
        <>
         <chakra.header
            bg={bg}
            w="full"
            px={{ base: 4, sm: 6}}
            py={4}
            shadow="xs"
        >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <Flex>
          <motion.div initial="exit" animate="enter" exit="exit">
          {/* framer animetion 右からふわっと */}
           <motion.div variants={rightVariants}>
              <chakra.a
                href="/"
                title="Choc Home Page"
                display="flex"
                alignItems="center"
                fontWeight="bold"
              >
            {/* Fab Loop */}
              <VisuallyHidden>Choc</VisuallyHidden>
                <chakra.h1 fontSize="2xl" fontWeight="bold" mr="2" ml="5">
                  <Image
                   src="https://res.cloudinary.com/dk2uwbtnl/image/upload/v1619447318/wed/logo_f2hpvg.png"
                        width={10} 
                        height={10}
                  />
                </chakra.h1>
                 FabLoop
              </chakra.a>
            </motion.div>
          </motion.div>
          </Flex>

          {/* PC */}
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
            
            {/* Recipe Page pulldown */}
            <TopMenuDown />

            <Link href="/PostForm">
              <Button variant="ghost">
             Post Form
              </Button>
            </Link>
            <Link href="/userpage">
              <Button variant="ghost">
              My Page
              </Button>
            </Link>
            {/* <Link href="/blog">
              <Button variant="ghost">
              Blog
              </Button>
            </Link> */}
            </HStack>
            <Link href="/signin">
              <Button variant="ghost" size="sm" bg="yellow">
              Sign In
            </Button>
            </Link>


            {/* absolute */}
            {/* モバイルsize */}
            <Box display={["inline-flex","inline-flex","inline-flex","none"]}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={4}
                rounded="md"
                shadow="xl"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
                 
                {/* hamberger menu recipe accordion */}
                <MenuAccordion />
                
                <Link href="/userpage">
                  <Button w="full" variant="ghost">
                    MyPost
                  </Button>
                </Link>
                <Link href="/PostForm">
                  <Button w="full" variant="ghost">
                    Post Form 
                  </Button>
                </Link>
                {/* <Link href="/blog">
                  <Button w="full" variant="ghost">
                    Blog
                  </Button>
                </Link> */}
                <Link href="/signin">
                  <Button w="full" variant="ghost">
                    Sign In
                  </Button>
                </Link>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header> 
    </>
    )
}
