import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import JeremyAvatar from './assets/images/image-jeremy.png'

const ProfileCard = () => {
  return (
    <Box minHeight="full">
      <Box
        position="relative"
        zIndex="overlay"
        bgColor="purple.500"
        padding="6"
        paddingBottom={{ base: 6, lg: 10 }}
        rounded="2xl"
      >
        <Flex
          flexDirection={{ base: 'row', lg: 'column' }}
          alignItems={{ base: 'center', lg: 'flex-start' }}
        >
          <Avatar
            src={JeremyAvatar}
            name="Jeremy Robson"
            border="2px"
            borderColor="gray.100"
            boxSize="12"
          />

          <Box marginLeft={{ base: 6, lg: 0 }} marginTop={{ base: 0, lg: 6 }}>
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
              fontSize="3xl"
              fontWeight="light"
              color="gray.100"
            >
              Jeremy Robson
            </Text>
          </Box>
        </Flex>
      </Box>

      <Box
        marginTop="-6"
        width="full"
        backgroundColor="purple.900"
        paddingX="4"
        paddingTop="6"
        paddingBottom="2"
        rounded="2xl"
      >
        <Flex
          flex="1"
          flexDirection={{ base: 'row', lg: 'column' }}
          alignItems={{ base: 'center', lg: 'flex-start' }}
          justifyContent={{ base: 'space-between', lg: 'flex-start' }}
          paddingX="4"
        >
          <Box
            as="button"
            marginTop="2"
            fontSize={{ base: 'small', lg: 'medium' }}
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
            marginTop="2"
            fontSize={{ base: 'small', lg: 'medium' }}
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
            marginTop="2"
            fontSize={{ base: 'small', lg: 'medium' }}
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
