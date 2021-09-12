import { useContext } from 'react'
import { TimeFrameContext } from './contexts/TimeFrameContext'
import { Container, Grid, GridItem } from '@chakra-ui/react'
import ProfileCard from './ProfileCard'
import StatCard from './StatCard'

import ExerciseImage from './assets/icons/icon-exercise.svg'
import PlayImage from './assets/icons/icon-play.svg'
import SelfCareImage from './assets/icons/icon-self-care.svg'
import SocialImage from './assets/icons/icon-social.svg'
import StudyImage from './assets/icons/icon-study.svg'
import WorkImage from './assets/icons/icon-work.svg'

import data from './data/data.json'

function Dashboard() {
  const { selectedTimeframe } = useContext(TimeFrameContext)

  function getStatHeader(title) {
    return {
      Work: {
        backgroundColor: 'hsl(15, 100%, 70%)',
        image: WorkImage,
      },
      Play: {
        backgroundColor: 'hsl(195, 74%, 62%)',
        image: PlayImage,
      },
      Study: {
        backgroundColor: 'hsl(348, 100%, 68%)',
        image: StudyImage,
      },
      Exercise: {
        backgroundColor: 'hsl(145, 58%, 55%)',
        image: ExerciseImage,
      },
      Social: {
        backgroundColor: 'hsl(264, 64%, 52%)',
        image: SocialImage,
      },
      'Self Care': {
        backgroundColor: 'hsl(43, 84%, 65%)',
        image: SelfCareImage,
      },
    }[title]
  }

  return (
    <Container
      marginY={{ base: 12, lg: 0 }}
      maxWidth={{ base: 'sm', lg: 'container.xl' }}
      minHeight="100vh"
      display={{ lg: 'flex' }}
      alignItems="center"
      justifyContent="center"
    >
      <Grid
        templateRows={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(4, 1fr)' }}
        gap={6}
      >
        <GridItem rowSpan={{ lg: 2 }}>
          <ProfileCard />
        </GridItem>

        {data.map((stat) => (
          <GridItem key={stat.title}>
            <StatCard
              title={stat.title}
              timeframe={stat.timeframes[selectedTimeframe]}
              statHeader={getStatHeader(stat.title)}
            />
          </GridItem>
        ))}
      </Grid>
    </Container>
  )
}

export default Dashboard
