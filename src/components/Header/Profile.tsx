import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Nelson Araújo</Text>
        <Text
          color="gray.300"
          fontSize="small"
        >
          nelson@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Nelson Araújo" src="https://github.com/nelsonsantosaraujo.png" />          
    </Flex>
  );
}