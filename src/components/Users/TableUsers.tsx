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

export function TableUsers () {
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
        <Tr>
          <Td px={['4', '4', '6']}>
            <Checkbox colorScheme="pink" />
          </Td>
          <Td>
            <Box>
              <Text fontWeight="bold">Wilson Matokanovic</Text>
              <Text fontSize="sm" color="gray.300">wilsonmjuniorx@gmail.com</Text>
            </Box>
          </Td>
          {isWideVersion && <Td>04 de abril, 2021</Td>}
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
      </Tbody>
    </Table>
  )
}
