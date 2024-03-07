import { Box, Container, Flex, Heading, Text, Stack, Input, InputGroup, InputLeftElement, Button, Image, Icon, VStack, HStack, Spacer, Tag, Divider, useColorModeValue } from "@chakra-ui/react";
import { FaSearch, FaThumbsUp, FaComment } from "react-icons/fa";

const Index = () => {
  const productCardBg = useColorModeValue("gray.100", "gray.700");

  return (
    <Container maxW="container.xl">
      <Flex py={5} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="xl">
          ProductHunt
        </Heading>
        <InputGroup maxW="md">
          <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
          <Input placeholder="Search for products..." />
        </InputGroup>
        <Button colorScheme="teal" variant="solid">
          Submit a Product
        </Button>
      </Flex>
      <Divider my={4} />
      <VStack spacing={5}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Box key={i} p={5} shadow="md" bg={productCardBg} borderRadius="md">
            <HStack spacing={4}>
              <Image borderRadius="md" boxSize="100px" objectFit="cover" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0fGVufDB8fHx8MTcwOTgxNjgyOHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Product image" />
              <VStack align="start">
                <Heading as="h3" size="md">
                  Product Name {i + 1}
                </Heading>
                <Text>This is a brief description of the product. It's a fantastic product that helps with your daily tasks.</Text>
                <HStack>
                  <Button leftIcon={<FaThumbsUp />} colorScheme="teal" variant="outline">
                    Like
                  </Button>
                  <Button leftIcon={<FaComment />} colorScheme="teal" variant="outline">
                    Comment
                  </Button>
                </HStack>
              </VStack>
              <Spacer />
              <VStack spacing={0}>
                <Tag colorScheme="teal" size="lg" borderRadius="full">
                  {Math.floor(Math.random() * 100)} Votes
                </Tag>
                <Text fontSize="sm" color="gray.500">
                  12h ago
                </Text>
              </VStack>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
