import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'

import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'

import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Search } from './Search'
import { Profile } from './Profile'
import { RiMenuLine } from 'react-icons/ri'

export function Header () {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

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
      {!isWideVersion && (
        <IconButton
        aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        >
        </IconButton>
      )}
      <Logo />

      {
        isWideVersion && <Search />
      }

      <Flex
        alignItems="center"
        marginLeft="auto"
      >
        <NotificationsNav />

        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}
