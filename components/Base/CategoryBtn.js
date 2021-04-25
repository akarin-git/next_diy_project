import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Box,Button,Grid
} from "@chakra-ui/react"
import Link from 'next/link'


export default function CategoryBtn() {
    return (
        <div>
         <Popover placement="top-start">
            <PopoverTrigger>
                <Button
                  tabIndex="0"
                  role="button"
                  aria-label="Some box"
                  p={5}
                  mt="5"
                  w="300px"
                  children="Category検索"
                  align="center"
                  position="none"
                  _hover={{
                  background: "white",
                  color: "teal.500",
                  }}/>
        </PopoverTrigger>
        <PopoverContent bg="tomato" color="white">
        <PopoverHeader fontWeight="semibold" align="center">DIY category</PopoverHeader>
        <PopoverArrow bg="pink.500" />
        <PopoverCloseButton bg="purple.500" />
            <PopoverBody align="center">
                <Link href="/recipe">
                    <Button mb="3" colorScheme="yellow" width="200px">
                        All Recipe
                    </Button>
                </Link>
                <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                <Link href="/category/handmade">
                    <Button colorScheme="blue">
                        Handmade
                    </Button>
                </Link>
                <Link href="/category/craft">
                    <Button colorScheme="blue">
                        Craft
                    </Button>
                </Link>
                <Link href="/category/living">
                    <Button colorScheme="blue">
                        Living
                    </Button>
                </Link>
                <Link href="/category/outside">
                    <Button colorScheme="blue">
                        Outside
                    </Button>
                </Link>
                </Grid>
            </PopoverBody>
        </PopoverContent>
        </Popover>
    </div>
    )
}
