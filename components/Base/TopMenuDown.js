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
            <Link href="/category/handmade">
            <MenuItem minH="40px">
                  <Image
                        boxSize="2rem"
                        borderRadius="full"
                        src="https://res.cloudinary.com/dk2uwbtnl/image/upload/v1615208465/background02_xx7sj9.png"
                        alt="Simon the pensive"
                        mr="12px"
                  />
                  <span>Handmade</span>
            </MenuItem>
            </Link>
            <Link href="/category/craft">
            <MenuItem minH="40px">
                  <Image
                        boxSize="2rem"
                        borderRadius="full"
                        src="https://res.cloudinary.com/dk2uwbtnl/image/upload/v1618539590/wed/Tulip_sa7woh.png"
                        alt="Simon the pensive"
                        mr="12px"
                  />
                  <span>Craft</span>
            </MenuItem>
            </Link>
            <Link href="/category/living">
            <MenuItem minH="40px">
                  <Image
                        boxSize="2rem"
                        borderRadius="full"
                        src="https://res.cloudinary.com/dk2uwbtnl/image/upload/c_scale,w_161/v1618539547/wed/Desk_lamp_perspective_matte_s_q0nvze.png"
                        alt="Simon the pensive"
                        mr="12px"
                  />
                  <span>Living</span>
            </MenuItem>
            </Link>
            <Link href="/category/outside">
            <MenuItem minH="40px">
                  <Image
                        boxSize="2rem"
                        // borderRadius="full"
                        pl="2"
                        pr="1"
                        src="https://res.cloudinary.com/dk2uwbtnl/image/upload/c_scale,h_64,w_29/v1619190969/wed/lamp_object_a5tcpg.png"
                        // src="https://res.cloudinary.com/dk2uwbtnl/image/upload/v1618539590/wed/Tulip_sa7woh.png"
                        alt="Simon the pensive"
                        mr="12px"
                  />
                  <span>Outside</span>
            </MenuItem>
            </Link>
        </MenuList>
    </Menu> 
    </>
    )
}
