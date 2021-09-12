import { Box, Flex } from '@chakra-ui/layout'
import {
  Image,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from '@chakra-ui/react'

const StatCard = ({ title, timeframe, statHeader }) => {
  return (
    <Box width="full" height="full" color="gray.200">
      <Box
        height="8"
        width="full"
        backgroundColor={statHeader.backgroundColor}
        roundedTop="lg"
      >
        <Flex
          width="full"
          alignItems="center"
          justifyContent="flex-end"
          paddingRight="4"
        >
          <Box height="auto" width="10">
            <Image src={statHeader.image} alt="work image" />
          </Box>
        </Flex>
      </Box>

      <Box
        position="relative"
        zIndex="overlay"
        marginTop="-2"
        paddingX="6"
        paddingY="4"
        borderRadius="lg"
        backgroundColor="purple.900"
      >
        <Stat>
          <Flex alignItems="center" justifyContent="space-between">
            <StatLabel>{title}</StatLabel>

            <Box as="span" color="gray.200" height="4" width="4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </Box>
          </Flex>

          <StatNumber marginTop="2" fontSize="3xl" fontWeight="light">
            {`${timeframe.current}hrs`}
          </StatNumber>

          <StatHelpText fontSize="small">
            Last Week - {`${timeframe.previous}hrs`}
          </StatHelpText>
        </Stat>
      </Box>
    </Box>
  )
}

export default StatCard
