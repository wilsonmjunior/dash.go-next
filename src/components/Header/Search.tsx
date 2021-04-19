import { useRef } from 'react'
import { Flex, Icon, Input } from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'

// controlled components - useState - busca usar debounce
export function Search () {
  // uncontrolled components
  const searchInputRef = useRef<HTMLInputElement>(null)

  // searchInputRef.current.focus() - (Imperativa)

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      alignItems="center"
      color="gray.200"
      position="relative"
      bgColor="gray.800"
      borderRadius="full"
    >
      <Input
        ref={searchInputRef} // uncontrolled
        color="gray.50"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Buscar na plataforma"
        _placeholder={{
          color: 'gray.400'
        }}
      />

      <Icon as={RiSearchLine} />
    </Flex>
  )
}
