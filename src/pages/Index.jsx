import { Box, Container, Heading, Text, VStack, Image, SimpleGrid, Button } from "@chakra-ui/react";
import { FaRegNewspaper, FaRegClock, FaRegEye } from "react-icons/fa";

const newsArticles = [
  {
    id: 1,
    title: "Local Park Renovation Plans",
    summary: "The city council has announced plans to renovate the historical central park this summer.",
    imageUrl: "https://images.unsplash.com/photo-1649233843692-0653f80aeedc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsb2NhbCUyMHBhcmt8ZW58MHx8fHwxNzE0NTQwNjY5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    publishedAt: "2023-09-15",
    views: 150,
  },
  {
    id: 2,
    title: "Annual Book Fair Returns",
    summary: "The much-awaited annual book fair will return next month with more stalls and new book releases.",
    imageUrl: "https://images.unsplash.com/photo-1631888720622-4746b895af14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxib29rJTIwZmFpcnxlbnwwfHx8fDE3MTQ1NDA2Njl8MA&ixlib=rb-4.0.3&q=80&w=1080",
    publishedAt: "2023-09-10",
    views: 200,
  },
  {
    id: 3,
    title: "High School Football Game Highlights",
    summary: "Highlights from last night's high school football game where our team secured a victory.",
    imageUrl: "https://images.unsplash.com/photo-1517747614396-d21a78b850e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoaWdoJTIwc2Nob29sJTIwZm9vdGJhbGwlMjBnYW1lfGVufDB8fHx8MTcxNDU0MDY3MHww&ixlib=rb-4.0.3&q=80&w=1080",
    publishedAt: "2023-09-12",
    views: 300,
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">
          Local News Today
        </Heading>
        <Text fontSize="xl">Stay updated with the latest local news and events.</Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {newsArticles.map((article) => (
            <Box key={article.id} p={5} shadow="md" borderWidth="1px" borderRadius="lg">
              <Image src={article.imageUrl} alt={article.title} borderRadius="md" />
              <Heading as="h3" size="lg" mt={4}>
                {article.title}
              </Heading>
              <Text mt={2}>{article.summary}</Text>
              <Box d="flex" alignItems="center" mt={2}>
                <FaRegClock />
                <Text ml={2} fontSize="sm">
                  {article.publishedAt}
                </Text>
              </Box>
              <Box d="flex" alignItems="center" mt={1}>
                <FaRegEye />
                <Text ml={2} fontSize="sm">
                  {article.views} views
                </Text>
              </Box>
              <Button rightIcon={<FaRegNewspaper />} colorScheme="blue" mt={4} w="full">
                Read More
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
