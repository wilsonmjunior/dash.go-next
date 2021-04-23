import {
  Button,
  Checkbox,
  Box,
  Icon,
  Text,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  Link
} from '@chakra-ui/react'
import { RiPencilLine } from 'react-icons/ri'

import { User } from '../../services/hooks/useUsers'

interface TableUsersProps {
  users: User[]
  onPrefetchUser: (userId: string) => void
}

export function TableUsers ({ users, onPrefetchUser }: TableUsersProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Table colorScheme="whiteAlpha">
      <Thead>
        <Tr>
          <Th px={['4', '4', '6']} color="gray.300" width="8">
            <Checkbox colorScheme="pink" />
          </Th>
          <Th>Usuário</Th>
          {isWideVersion && <Th>Data de cadastro</Th>}
          <Th w="8"></Th>
        </Tr>
      </Thead>
      <Tbody>
        {
          users?.map(user => (
            <Tr key={user.id}>
              <Td px={['4', '4', '6']}>
                <Checkbox colorScheme="pink" />
              </Td>
              <Td>
                <Box>
                  <Link color="purple.400" onMouseEnter={() => onPrefetchUser(user.id)}>
                    <Text fontWeight="bold">{user.name}</Text>
                  </Link>
                  <Text fontSize="sm" color="gray.300">{user.email}</Text>
                </Box>
              </Td>
              {isWideVersion && <Td>{user.createdAt}</Td>}
              <Td>
                {isWideVersion && (
                  <Button
                    as="a"
                    size="sm"
                    colorScheme="blue"
                    leftIcon={<Icon as={RiPencilLine} />}
                  >
                    Editar
                  </Button>
                )}
              </Td>
            </Tr>
          ))
        }
      </Tbody>
    </Table>
  )
}
