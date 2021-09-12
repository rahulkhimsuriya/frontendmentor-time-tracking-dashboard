import { Box } from '@chakra-ui/react'
import { useContext } from 'react'
import { TimeFrameContext } from './contexts/TimeFrameContext'

function ProfileTimeframeButton({ timeframe }) {
  const { selectedTimeframe, setSelectedTimeframe } =
    useContext(TimeFrameContext)

  function handleChangeTimeframe(timeframe) {
    setSelectedTimeframe(timeframe)
  }

  return (
    <Box
      as="button"
      marginTop="2"
      fontSize={{ base: 'small', lg: 'medium' }}
      color={selectedTimeframe === timeframe ? 'gray.200' : 'gray.400'}
      outline="none"
      textTransform="capitalize"
      _hover={{ color: 'gray.200' }}
      _focus={{ color: 'gray.200' }}
      _active={{ color: 'gray.200' }}
      onClick={() => handleChangeTimeframe(timeframe)}
    >
      {timeframe}
    </Box>
  )
}

export default ProfileTimeframeButton
