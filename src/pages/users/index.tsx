import {
  Box,
  Flex
} from '@chakra-ui/react'

import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { Sidebar } from '../../components/Sidebar'
import { HeaderUsers } from '../../components/Users/HeaderUsers'
import { TableUsers } from '../../components/Users/TableUsers'

export default function UserList () {
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
          <HeaderUsers />

          <TableUsers />

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}
