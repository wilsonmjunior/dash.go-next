import {
  Box,
  Flex,
  Spinner,
  Text
} from '@chakra-ui/react'
import { useState } from 'react'

import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { Sidebar } from '../../components/Sidebar'
import { HeaderUsers } from '../../components/Users/HeaderUsers'
import { TableUsers } from '../../components/Users/TableUsers'
import { api } from '../../services/api'
import { useUsers } from '../../services/hooks/useUsers'
import { queryClient } from '../../services/queryClient'

export default function UserList () {
  const [page, setPage] = useState(1)
  const { isLoading, data, isFetching, refetch, error } = useUsers(page)

  async function handlePrefetchUser(userId: string) {
    await queryClient.prefetchQuery(['user', userId], async () => {
      const response = await api.get(`users/${userId}`)

      return response.data
    }, {
      staleTime: 1000 * 60 * 10, // 10 minutes
    })
  }

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
              <TableUsers users={data.users} onPrefetchUser={handlePrefetchUser} />
            )
          }

          <Pagination 
            totalCountOfRegisters={data?.totalCount}
            currentPage={page}
            onPageChange={setPage}
          />
        </Box>
      </Flex>
    </Box>
  )
}
