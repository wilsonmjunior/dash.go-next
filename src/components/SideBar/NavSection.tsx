import { ReactNode } from 'react'
import { Box, Text, Stack } from '@chakra-ui/react'

interface NavSectionProps {
  title: string
  children: ReactNode
}

export function NavSection ({ title, children }:NavSectionProps) {
  return (
    <Box>
    <Text fontWeight="bold" color="gray.300" fontSize="small">{title}</Text>
    <Stack spacing="4" marginTop="8" alignItems="strach">
     {children}
    </Stack>
  </Box>
  )
}
