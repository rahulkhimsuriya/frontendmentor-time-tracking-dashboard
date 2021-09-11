import { Box, Text } from '@chakra-ui/layout'
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from '@chakra-ui/react'

const StatCard = () => {
  return (
    <Box
      width="full"
      height="full"
      backgroundColor="purple.900"
      color="gray.200"
      padding="4"
      borderRadius="lg"
    >
      <Stat>
        <StatLabel>Work</StatLabel>
        <StatNumber fontSize="4xl">32 hrs</StatNumber>
        <StatHelpText fontSize="small">Last Week - 36hrs</StatHelpText>
      </Stat>
    </Box>
  )
}

export default StatCard
