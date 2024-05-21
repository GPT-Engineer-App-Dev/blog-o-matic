import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Posts = () => {
  // Placeholder posts data
  const posts = [
    { id: 1, title: "First Post", content: "This is the content of the first post." },
    { id: 2, title: "Second Post", content: "This is the content of the second post." },
  ];

  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={4}>Posts</Heading>
      <VStack spacing={4} align="stretch">
        {posts.map(post => (
          <Box key={post.id} p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">{post.title}</Heading>
            <Text mt={4}>{post.content}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Posts;