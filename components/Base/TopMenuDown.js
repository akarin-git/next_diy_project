import Link from 'next/link'
import { MenuButton,
        Button,
        MenuItem,
        MenuList,
        Box,
        Image,
        Menu,
        Icon
 } from "@chakra-ui/react";
 import { ChevronDownIcon } from "react-icons/hi";
 import { HiChevronDoubleDown } from "react-icons/hi";



export default function TopMenuDown() {
    return (
        <>
        <Menu>
        <MenuButton 
            variant="ghost" 
            width="135px" 
            p="8px"
            fontWeight="semibold"
            _hover={{ bg: "#ebedf0" }} 
            borderRadius="5px"
            _active={{
            bg: "#ebedf0",
            transform: "scale(0.98)",
            borderColor: "#bec3c9",
            }}
        >
        <Icon as={HiChevronDoubleDown} />
            DIY Recipes
        </MenuButton>
        <MenuList>
            <Link href="/recipe">
            <MenuItem minH="40px">
                  <Image
                        boxSize="2rem"
                        borderRadius="full"
                        src="https://res.cloudinary.com/dk2uwbtnl/image/upload/v1618453937/Tools_perspective_matte_eikpyb.png"
                        alt="Fluffybuns the destroyer"
                        mr="12px"
                  />
                  <span>All Recipe</span>
            </MenuItem>
            </Link>
            <Link href="/category/craft">
            <MenuItem minH="40px">
                  <Image
                        boxSize="2rem"
                        borderRadius="full"
                        src="https://res.cloudinary.com/dk2uwbtnl/image/upload/v1615208465/background02_xx7sj9.png"
                        alt="Simon the pensive"
                        mr="12px"
                  />
                  <span>Craft</span>
            </MenuItem>
            </Link>
            <Link href="/category/handmade">
            <MenuItem minH="40px">
                  <Image
                        boxSize="2rem"
                        borderRadius="full"
                        src="https://res.cloudinary.com/dk2uwbtnl/image/upload/v1615205762/Tulip_q8vmj9.png"
                        alt="Simon the pensive"
                        mr="12px"
                  />
                  <span>Handmade</span>
            </MenuItem>
            </Link>
        </MenuList>
    </Menu> 
    </>
    )
}
