import { Box, Flex, Text } from "@chakra-ui/layout";
import { Avatar, HStack, Icon } from "@chakra-ui/react";
import { RiNotification2Line, RiUserAddLine } from "react-icons/ri";

import { InputSearch } from '../components/InputSearch'

export function Header() {

  return (
    <Flex
      as="header"
      width="100%"
      maxWidth={1400}
      height="20"
      marginX="auto"
      marginTop="4"
      paddingX="6"
      alignItems="center"
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        width="64"
      >
        dashgo
        <Text as="span" ml="1" color="pink.500">.</Text>
      </Text>

      <InputSearch />

      <Flex
        alignItems="center"
        marginLeft="auto"
      >
        <HStack
          spacing="8"
          marginX="8"
          paddingRight="8"
          paddingY="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotification2Line} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

        <Box
          marginRight="4"
          textAlign="right"
        >
          <Text>Wilson Matokanovic</Text>
          <Text
            color="gray.300"
            fontSize="small"
          >
            wilsonmjunior@gmail.com
          </Text>
        </Box>
        <Avatar
          size="md"
          name="Wilson Matokanovic"
          src="https://avatars.githubusercontent.com/u/11083214?v=4"
        />
      </Flex>
    </Flex>
  )
}