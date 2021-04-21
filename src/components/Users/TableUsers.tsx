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
  useBreakpointValue
} from '@chakra-ui/react'
import { RiPencilLine } from 'react-icons/ri'

interface User {
  id: number
  name: string
  email: string
  createdAt: string
}

interface TableUsersProps {
  users: User[]
}

export function TableUsers ({ users }: TableUsersProps) {
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
                  <Text fontWeight="bold">{user.name}</Text>
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
