import { Stack, Box } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

export function Pagination () {
  return (
    <Stack
      direction="row"
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row">
      <PaginationItem pageNumber={1} />
        <PaginationItem isCurrent pageNumber={2} />
        <PaginationItem pageNumber={3} />
        <PaginationItem pageNumber={4} />
        <PaginationItem pageNumber={5} />
      </Stack>
    </Stack>
  )
}
