import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,Text,
  chakra,Box
} from "@chakra-ui/react"
import InfoStory from './InfoStory';
import Link from 'next/link';




export default function FormInfoModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
    <Button
     onClick={onOpen}
     px="3"
     py="2"
     w="300px"
     align="center"
     position={["none","none","relative"]}
     size="md" cursor="cursor"
     _hover={{
    background: "white",
    color: "teal.500",
    
    }}>
      FabLoopでなにができるの？
    </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay/>
        <ModalContent >
          {/* <ModalHeader　align="center" mt="4" color="#696969">このサイトの使い方</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody>
            <InfoStory />
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button> */}
            <Box w="200px" >
            <Link href={`/recipe`}>
            <Button
            mb="5" w="200px" colorScheme="purple" onClose={onClose} 
            //  variant="ghost"
            >
            レシピ を探す
            </Button>
            </Link>
            <Link href={`/PostForm`}>
            <Button
            w="200px"　colorScheme="purple" onClose={onClose}
            //  variant="ghost"
            >
            レシピ を投稿する
            </Button>
            </Link>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </>
    )
}
