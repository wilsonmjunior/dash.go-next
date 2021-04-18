import { Button, Flex, Stack } from '@chakra-ui/react'

import { Input } from '../components/Form/Input'

export default function SignIn () {
  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        as="form"
        width="100%"
        height="300px"
        maxWidth={360}
        backgroundColor="gray.800"
        padding="2rem"
        borderRadius="8"
        flexDir="column"
      >
        <Stack spacing="4">
          <Input
            name="email"
            type="email"
            label="E-mail"
          />

          <Input
            name="password"
            type="password"
            label="Password"
          />
        </Stack>

        <Button
          type="submit"
          marginTop="6"
          colorScheme="pink"
          size="lg"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
