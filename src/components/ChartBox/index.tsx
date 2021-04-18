import dynamic from 'next/dynamic'
import theme from '@chakra-ui/theme'
import { Box, Text } from '@chakra-ui/react'

const ApexChart = dynamic(() => import('react-apexcharts'))

const options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '18 de Mar',
      '19 de Mar',
      '20 de Mar',
      '21 de Mar',
      '22 de Mar',
      '23 de Mar',
      '24 de Mar'
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
}

const series = [{ name: 'series1', data: [31, 120, 10, 28, 51, 18, 109] }]

interface ChartBoxProps {
  title: string
}

export function ChartBox ({ title }: ChartBoxProps) {
  return (
    <Box
      p={['6', '8']}
      bg="gray.800"
      borderRadius={8}
      pb="4"
    >
      <Text fontSize="lg" mb="4">{title}</Text>

      <ApexChart
        options={options}
        series={series}
        type="area"
        height={160}
      />
    </Box>
  )
}
