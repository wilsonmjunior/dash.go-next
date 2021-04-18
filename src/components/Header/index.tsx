import { Flex } from '@chakra-ui/react'

import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Search } from './Search'
import { Profile } from './Profile'

export function Header () {
  return (
    <Flex
      as="header"
      width="100%"
      maxWidth={1400}
      height="20"
      marginX="auto"
      marginTop="4"
      paddingX="6"
      alignItems="center"
    >
      <Logo />

      <Search />

      <Flex
        alignItems="center"
        marginLeft="auto"
      >
        <NotificationsNav />

        <Profile />
      </Flex>
    </Flex>
  )
}
