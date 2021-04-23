import { Button } from '@chakra-ui/react'

interface PaginationProps {
  isCurrent?: boolean
  pageNumber: number
  onPageChange: (page: number) => void
}

export function PaginationItem ({ 
  isCurrent = false,
  pageNumber,
  onPageChange
}: PaginationProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: 'pink.500',
          cursor: 'pointer'
        }}
      >
        {pageNumber}
      </Button>
    )
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      onClick={() => onPageChange(pageNumber)}
      _hover={{
        bg: 'gray.500'
      }}
    >
      {pageNumber}
    </Button>
  )
}
