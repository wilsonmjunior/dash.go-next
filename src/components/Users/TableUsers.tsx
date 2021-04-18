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
  Tr
} from '@chakra-ui/react'
import { RiPencilLine } from 'react-icons/ri'

export function TableUsers () {
  return (
    <Table colorScheme="whiteAlpha">
    <Thead>
      <Tr>
        <Th px="6" color="gray.300" width="8">
          <Checkbox colorScheme="pink" />
        </Th>
        <Th>Usuário</Th>
        <Th>Data de cadastro</Th>
        <Th w="8"></Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td px="6">
          <Checkbox colorScheme="pink" />
        </Td>
        <Td>
          <Box>
            <Text fontWeight="bold">Wilson Matokanovic</Text>
            <Text fontSize="sm" color="gray.300">wilsonmjuniorx@gmail.com</Text>
          </Box>
        </Td>
        <Td>04 de abril, 2021</Td>
        <Td>
          <Button
            as="a"
            size="sm"
            colorScheme="blue"
            leftIcon={<Icon as={RiPencilLine} />}
          >
            Editar
          </Button>
        </Td>
      </Tr>
    </Tbody>
  </Table>
  )
}
