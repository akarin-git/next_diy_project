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
} from "@chakra-ui/react"
import InfoStory from './InfoStory';
import Link from 'next/link';




export default function FormInfoModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
    <Button onClick={onOpen} px="20" position={["none","relative"]}>About FabLoop</Button>
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay/>
        <ModalContent >
          <ModalHeader　align="center" mt="4" color="#696969">このサイトの使い方</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <InfoStory />
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button> */}
            <Link href={`/PostForm`}>
            <Button
            colorScheme="purple" onClose={onClose}
            //  variant="ghost"
            >
            DIY Recipe を投稿する
            </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </>
    )
}
