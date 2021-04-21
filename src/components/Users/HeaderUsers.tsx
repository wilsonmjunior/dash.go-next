import {
  Button,
  Flex,
  Heading,
  Icon,
  Spinner,
  IconButton,
  HStack
} from '@chakra-ui/react'
import Link from 'next/link'
import { RiAddLine, RiRefreshLine } from 'react-icons/ri'
import { QueryObserverResult } from 'react-query'

interface HeaderUsersProps {
  loading: boolean
  refetch: () => Promise<QueryObserverResult<any, unknown>>
}

export function HeaderUsers ({ loading, refetch }: HeaderUsersProps) {
  return (
    <Flex
      mb="8"
      justifyContent="space-between"
      alignItems="center"
    >
      <Heading size="lg" fontWeight="normal" >
        Usuários
        { loading && <Spinner size="sm" color="gray.500" ml="4" /> }
      </Heading>

      <HStack spacing="4">
        <Link href="/users/create">
          <Button
            as="a"
            size="md"
            colorScheme="pink"
            leftIcon={<Icon as={RiAddLine} fontSize="20px" />}
          >
            Criar novo usuário
          </Button>
        </Link>
        <IconButton
          aria-label="Atualizar dados" 
          size="md"
          colorScheme="blue" 
          icon={<RiRefreshLine />} 
          onClick={refetch}
        />
      </HStack>
    </Flex>
  )
}
