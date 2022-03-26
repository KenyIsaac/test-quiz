import { Box, Text, Link } from "@chakra-ui/react";


export const Footer = () => {
  return (
    <Box h="5vh">
      <Text color="gray.50" verticalAlign="bottom">
        Created by{" "}
        <Link
          href="https://kenyisaac.netlify.app/"
          _hover={{
            color: "blue.500",
          }}
          isExternal
        >
          Keny Isaac 😎
        </Link>{" "}
       
      </Text>
    </Box>
  );
};
