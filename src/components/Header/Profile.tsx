import { Flex, Avatar, Box, Text } from '@chakra-ui/react'

export function Profile () {
  return (
    <Flex align="center">
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
  )
}
