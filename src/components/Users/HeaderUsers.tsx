import {
  Button,
  Flex,
  Heading,
  Icon
} from '@chakra-ui/react'
import Link from 'next/link'
import { RiAddLine } from 'react-icons/ri'

export function HeaderUsers () {
  return (
    <Flex
      mb="8"
      justifyContent="space-between"
      alignItems="center"
    >
      <Heading size="lg" fontWeight="normal">Usuários</Heading>

    <Link href="/users/create">
      <Button
        as="a"
        size="sm"
        colorScheme="pink"
        leftIcon={<Icon as={RiAddLine} fontSize="20px" />}
      >
        Criar novo usuário
      </Button>
    </Link>
    </Flex>
  )
}
