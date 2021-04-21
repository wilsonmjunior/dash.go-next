import {
  Box,
  Flex,
  Spinner,
  Text
} from '@chakra-ui/react'
import { useQuery } from 'react-query'

import { api } from '../../services/api'

import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { Sidebar } from '../../components/Sidebar'
import { HeaderUsers } from '../../components/Users/HeaderUsers'
import { TableUsers } from '../../components/Users/TableUsers'

export default function UserList () {
  const { isLoading, data, isFetching, refetch ,error } = useQuery('users', async () => {
    const { data } = await api.get('users')

    const users = data.users.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR',{
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    }))

    return users
  }, {
    staleTime: 1000 * 6,
  })

  return (
    <Box>
      <Header />

      <Flex
        w="100%"
        my="6"
        maxWidth={1400}
        mx="auto"
        px="6"
      >
        <Sidebar />

        <Box
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p="8"
        >
          <HeaderUsers
            loading={!isLoading && isFetching} 
            refetch={refetch} 
          />

          {isLoading
            ? (
              <Flex justify="center">
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="md"
                />
              </Flex>
            ) : error ? (
              <Flex>
                <Text>Falha ao obter dados</Text>
              </Flex>
            ) : (
              <TableUsers users={data} />
            )
          }

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}
