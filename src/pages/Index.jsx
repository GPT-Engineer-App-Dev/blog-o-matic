import { Container, Text, VStack, Heading, Box, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to the Blog</Heading>
        <Text fontSize="xl">Discover amazing content from various authors.</Text>
        <Box>
          <Flex direction="row" spacing={4}>
            <Link to="/posts">
              <Button colorScheme="teal" size="lg" m={2}>View Posts</Button>
            </Link>
            <Link to="/create-post">
              <Button colorScheme="blue" size="lg" m={2}>Create Post</Button>
            </Link>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;