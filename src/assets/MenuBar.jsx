import React from "react";
import BurgerIcon from "./BurgerIcon";
import { Button, Link, Modal, ModalBody, ModalContent, useDisclosure } from "@nextui-org/react";

export default function MenuBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = (backdrop) => {
    onOpen();
  };

  return (
    <>
      <div>
        <Button
          isIconOnly
          color="primary"
          variant="light"
          onPress={handleOpen}
        ><BurgerIcon /></Button>
      </div>
      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose} placement="top-center" size="xs" hideCloseButton>
        <ModalContent>
          {(onClose) => (
            <ModalBody>
              <Link href="#" onPress={onClose}>Inicio</Link>
              <Link href="#Nosotros" onPress={onClose}>Nosotros</Link>
              <Link href="#Productos" onPress={onClose}>Productos</Link>
              <Link href="#Contacto" onPress={onClose}>Contactanos</Link>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  )
};