import { Box, Heading, Link, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <VStack h="100vh" justify="center">
      <Heading>Hello to my template!</Heading>

      <Box as="footer">
        Follow me on{" "}
        <Link href="https://github.com/joaovictor3g" isExternal color="blue">
          Github
        </Link>
      </Box>
    </VStack>
  );
};

export default Home;
