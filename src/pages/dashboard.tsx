import { Flex, SimpleGrid } from '@chakra-ui/react'

import { SideBar } from '../components/SideBar'
import { Header } from '../components/Header'
import { ChartBox } from '../components/ChartBox'

export default function Dashboard () {
  return (
    <Flex
      direction="column"
      height="100vh"
    >
      <Header />
      <Flex
        width="100%"
        marginY="6"
        marginX="auto"
        paddingX="6"
        maxWidth={1400}
      >
        <SideBar />
        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex"
        >
          <ChartBox title="Inscritos da semana" />

          <ChartBox title="Taxa de abertura" />
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
