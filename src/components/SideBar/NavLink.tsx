import { ElementType, ReactNode } from 'react'
import { Link, Icon, Text, LinkProps as ChakraLinkProps } from '@chakra-ui/react'

interface NavLinkProps extends ChakraLinkProps{
  icon: ElementType
  children: ReactNode
}

export function NavLink ({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text marginLeft="4" fontWeight="medium">{children}</Text>
    </Link>
  )
}
