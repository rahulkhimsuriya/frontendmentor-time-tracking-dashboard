import { Container, Grid, GridItem } from '@chakra-ui/react'
import ProfileCard from './ProfileCard'
import StatCard from './StatCard'

function Dashboard() {
  return (
    <Container
      marginY={{ base: 12, lg: 0 }}
      maxWidth={{ base: 'sm', lg: 'container.lg' }}
      minHeight="100vh"
      display={{ lg: 'flex' }}
      alignItems="center"
      justifyContent="center"
    >
      <Grid
        templateRows={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(5, 1fr)' }}
        gap={6}
      >
        <GridItem rowSpan={{ base: 2, lg: 2 }} colSpan={{ lg: 2 }}>
          <ProfileCard />
        </GridItem>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <GridItem key={i}>
            <StatCard />
          </GridItem>
        ))}
      </Grid>
    </Container>
  )
}

export default Dashboard
