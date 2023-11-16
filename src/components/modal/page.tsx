"use client";

import {
  ChakraProvider,
  extendTheme,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";

interface Props {
  props: () => void;
}

interface ModalType {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const theme = extendTheme({
  Modal: {
    baseStyle: (props: Props) => ({
      dialog: {
        maxWidth: ["40%", "40%", "40%"],
        minWidth: "40%",
        maxHeight: ["50%", "50%", "50%"],
        minHeight: "45%",
        bg: "white",
        text: "black",
      },
    }),
  },
});

export default function FinishedModal({ isOpen, onOpen, onClose }: ModalType) {
  return (
    <ChakraProvider theme={theme}>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader color={"red"}>VOCÊ PERDEU PARCEIRA</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text color={"black"} fontSize={24}>
              Então quer dizer que você me ama? ta me devendo 5incão no pix meu
              bem
            </Text>
            <Text color={"black"} fontSize={24}>
              Meu pix é:
              <Text color={"purple"} fontSize={32}>
                47453209811
              </Text>
            </Text>
            <Image
              width={200}
              className="ml-4"
              src={
                "https://media.tenor.com/VSNorUblTRIAAAAC/rolling-on-the-floor-laughing.gif"
              }
            ></Image>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Fechar e aceitar que perdeu!
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}
