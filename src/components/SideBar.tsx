import Icon from "@chakra-ui/icon";
import { Box, Link, Stack, Text } from "@chakra-ui/layout";
import {
  RiContactsLine,
  RiDashboardLine,
  RiInputMethodLine,
  RiGitMergeLine,
} from "react-icons/ri";

export function SideBar() {

  return (
    <Box as="aside" width="64" marginRight="8">
      <Stack spacing="12" marginRight="8">
        <Box>
          <Text fontWeight="bold" color="gray.300" fontSize="small">GERAL</Text>
          <Stack spacing="4" marginTop="8" alignItems="strach">
            <Link display="flex" alignItems="center">
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text marginLeft="4" fontWeight="medium">Dashboard</Text>
            </Link>

            <Link display="flex" alignItems="center">
              <Icon as={RiContactsLine} fontSize="20" />
              <Text marginLeft="4" fontWeight="medium">Usuários</Text>
            </Link>
          </Stack>
        </Box>

        <Box>
          <Text fontWeight="bold" color="gray.300" fontSize="small">AUTOMAÇÃO</Text>
          <Stack spacing="4" marginTop="8" alignItems="strach">
            <Link display="flex" alignItems="center">
              <Icon as={RiInputMethodLine} fontSize="20" />
              <Text marginLeft="4" fontWeight="medium">Formulários</Text>
            </Link>

            <Link display="flex" alignItems="center">
              <Icon as={RiGitMergeLine} fontSize="20" />
              <Text marginLeft="4" fontWeight="medium">Automação</Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}