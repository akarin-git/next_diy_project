import Link from 'next/link'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,Button,Text
} from "@chakra-ui/react"


export default function MenuAccordion() {
    return (
        <Box w="full" bg="#e6e6fa">
        <Accordion allowToggle>
            <AccordionItem w="full">
            <h2>
               <AccordionButton w="full">
                  <Text w="full" variant="ghost"　fontWeight="bold">
                    DIY Recipes
                  </Text>
                <AccordionIcon color="#9932cc"/>
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <Link href="/recipe">
                  <Button w="full" variant="ghost">
                    All Recipe
                  </Button>
            </Link> 
            <Link href="/category/craft">
                  <Button w="full" variant="ghost">
                    Craft
                  </Button>
            </Link> 
            <Link href="/category/handmade">
                  <Button w="full" variant="ghost">
                    Handmade
                  </Button>
            </Link> 
            <Link href="/category/outside">
                  <Button w="full" variant="ghost">
                    Outside
                  </Button>
            </Link> 
            <Link href="/category/living">
                  <Button w="full" variant="ghost">
                    Living
                  </Button>
            </Link> 
            </AccordionPanel>
        </AccordionItem>
        </Accordion> 
    </Box>
    )
}
