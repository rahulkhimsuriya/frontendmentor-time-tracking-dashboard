import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import JeremyAvatar from './assets/images/image-jeremy.png'

const ProfileCard = () => {
  return (
    <Box position="relative" minHeight="full" minWidth="base">
      <Box
        position="relative"
        zIndex="dropdown"
        bgColor="purple.500"
        padding="6"
        borderRadius="2xl"
      >
        <Flex alignItems="center">
          <Avatar
            src={JeremyAvatar}
            name="Jeremy Robson"
            border="2px"
            borderColor="gray.100"
          />

          <Box marginLeft="6">
            <Text
              as="span"
              lineHeight="shorter"
              color="gray.300"
              fontSize="small"
            >
              Report for
            </Text>
            <Text
              lineHeight="shorter"
              fontSize="2xl"
              fontWeight="light"
              color="gray.100"
            >
              Jeremy Robson
            </Text>
          </Box>
        </Flex>
      </Box>

      <Box
        position="absolute"
        top="20"
        width="full"
        backgroundColor="purple.900"
        paddingX="4"
        paddingTop="10"
        paddingBottom="4"
        borderBottomRadius="2xl"
      >
        <Flex
          flex="1"
          alignItems="center"
          justifyContent="space-between"
          paddingX="4"
        >
          <Box
            as="button"
            fontSize="small"
            color="gray.400"
            outline="none"
            _hover={{ color: 'gray.200' }}
            _focus={{ color: 'gray.200' }}
            _active={{ color: 'gray.200' }}
          >
            Daily
          </Box>
          <Box
            as="button"
            fontSize="small"
            color="gray.400"
            outline="none"
            _hover={{ color: 'gray.200' }}
            _focus={{ color: 'gray.200' }}
            _active={{ color: 'gray.200' }}
          >
            Weekly
          </Box>
          <Box
            as="button"
            fontSize="small"
            color="gray.400"
            outline="none"
            _hover={{ color: 'gray.200' }}
            _focus={{ color: 'gray.200' }}
            _active={{ color: 'gray.200' }}
          >
            Monthly
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default ProfileCard
