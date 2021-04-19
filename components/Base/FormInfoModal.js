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



export default function FormInfoModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
    <Button onClick={onOpen}>About MyPost FabLoop</Button>
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay/>
        <ModalContent >
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>本文</Text>
            <InfoStory/>
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button> */}
            <Button
            colorScheme="purple"
            //  variant="ghost"
            >
            DIY Recipe を投稿する
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </>
    )
}
