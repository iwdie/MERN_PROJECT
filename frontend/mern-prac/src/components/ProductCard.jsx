import React from "react";
import { useState } from "react";
import {
  Box,
  HStack,
  IconButton,
  Image,
  Text,
  Heading,
  useToast,
  Modal,
  useDisclosure,
  ModalHeader,
  ModalFooter,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  VStack,
  Input,
  Button,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useProductStore } from "../store/products";
import { updateProduct } from "../../../../backend/controllers/product.controller";

const ProductCard = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState({});
  const { deleteProduct, updateProduct } = useProductStore(); // Ensure this function is imported correctly
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Handle Delete Function
  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);

    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleUpdateProduct = async (pid, updatedProduct) => {
    await updateProduct(pid, updatedProduct);
    onClose();
  };

  // Return JSX
  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w="full"
        objectFit="cover"
      />
      <Box padding={4} bgColor={"gray.200"}>
        <Heading as="h3" size="md" mb={2} color={"black"}>
          {product.name}
        </Heading>
        <Text fontWeight="bold" fontSize="xl" color="black" mb={4}>
          {product.price}HRs
        </Text>
        <HStack>
          <IconButton
            icon={<EditIcon />}
            onClick={onOpen}
            colorScheme="blue"
            aria-label="Edit Product"
          />
          <IconButton
            icon={<DeleteIcon />}
            colorScheme="red"
            aria-label="Delete Product"
            onClick={() => handleDeleteProduct(product._id)}
          />
        </HStack>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Box>
          <ModalOverlay bgColor={"gray.200"}>
            <ModalContent alignItems={"center"} justifyContent={"center"} spacing={7}>
              <ModalCloseButton />
              <ModalHeader>Update Product</ModalHeader>
              <ModalBody>
                <VStack spacing={4}>
                  <Input
                    placeholder="Project Name"
                    name="name"
                    value={updatedProduct.name}
                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                  />
                  <Input
                    placeholder="Time Given"
                    name="price"
                    value={updatedProduct.price}
                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                  />
                  <Input
                    placeholder=" Image"
                    name="image"
                    value={updatedProduct.image}
                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                  />
                </VStack>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={() => handleUpdateProduct(product._id, updatedProduct)}>
                  Update
                </Button>
                <Button variant="ghost" onClick={onClose}>
                  Cancel
                </Button>
              </ModalFooter>
            </ModalContent>
          </ModalOverlay>
        </Box>
      </Modal>
    </Box>
  );
};

export default ProductCard;
