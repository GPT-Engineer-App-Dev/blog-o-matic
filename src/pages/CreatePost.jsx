import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Textarea, Heading } from "@chakra-ui/react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic
    console.log("Post created:", { title, content });
  };

  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={4}>Create a New Post</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="title" mb={4}>
          <FormLabel>Title</FormLabel>
          <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </FormControl>
        <FormControl id="content" mb={4}>
          <FormLabel>Content</FormLabel>
          <Textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="blue">Submit</Button>
      </form>
    </Box>
  );
};

export default CreatePost;