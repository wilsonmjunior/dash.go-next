import { Stack, Box, Text } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

interface PaginationProps {
  totalCountOfRegisters: number
  registerPerPage?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter(page => page > 0)
}

export function Pagination ({
  totalCountOfRegisters,
  registerPerPage = 10,
  currentPage = 1,
  onPageChange 
}: PaginationProps) {
  const lastPage = Math.ceil(totalCountOfRegisters / registerPerPage);

  console.log('de',lastPage);

  const previousPages = currentPage > 1 
    ? generatePagesArray((currentPage - 1 - siblingsCount), currentPage - 1) 
    : []

  const nextPages = currentPage < lastPage 
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage)) 
    : []

  return (
    <Stack
      direction={['column', 'row']}
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>{currentPage}</strong> - <strong>{registerPerPage}</strong> de <strong>{totalCountOfRegisters}</strong>
      </Box>
      <Stack direction="row">
        {currentPage > (siblingsCount + 1) && (
          <>
            <PaginationItem pageNumber={1} onPageChange={onPageChange} />
            { currentPage > (2 + siblingsCount) && (
              <Text color="gray.300" width="8" align="center">...</Text>
            )}
          </>
        )}

        {previousPages.length > 0 && previousPages.map(page => (
          <PaginationItem key={page} pageNumber={page} onPageChange={onPageChange} />
        ))}

        <PaginationItem pageNumber={currentPage} isCurrent onPageChange={onPageChange} />

        {nextPages.length > 0 && nextPages.map(page => (
          <PaginationItem key={page} pageNumber={page} onPageChange={onPageChange} />
        ))}

        {(currentPage +siblingsCount) < lastPage && (
          <>
            { (currentPage + 1 + siblingsCount) < lastPage && (
              <Text color="gray.300" width="8" align="center">...</Text>
            )}
            <PaginationItem pageNumber={lastPage} onPageChange={onPageChange} />
          </>
        )}
      </Stack>
    </Stack>
  )
}
