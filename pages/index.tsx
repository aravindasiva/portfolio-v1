import {
  Box,
  Center,
  Grid,
  GridItem,
  Stack,
  useBreakpointValue
} from '@chakra-ui/react'
import React from 'react'
import dynamic from 'next/dynamic'
import ScrollHelper from '../components/ScrollHelper'
import SideBar from '../components/SideBar'
import SiteHeader from '../components/SiteHeader'
import SiteAvatar from '../components/SiteAvatar'
import FadeLayout from '../components/FadeLayout'
import About from '../components/About'
import Experience from '../components/Experience'
import Works from '../components/Works'
import { Article } from '../types/article'
import GetInTouch from '../components/GetInTouch'
import OpenGraphHead from '../components/Misc/OpenGraphHead'

const DevToArticles = dynamic(() => import('../components/DevToArticles'))


export default function Home({ articles }: { articles: Article[] }): JSX.Element {

  const sideBarPadding = useBreakpointValue({ base: '5', md: '8', lg: '14' })
  const mainContent = useBreakpointValue({
    base: '5',
    md: '14',
    lg: '14',
    xl: 0,
  })

  return (
    <>
      <OpenGraphHead />
      <SiteHeader />
      <Grid
        id="mainGrid"
        templateColumns={{
          base: 'repeat(1, 1fr)',
          lg: 'repeat(3, 1fr)',
          xl: 'repeat(5, 1fr)',
        }}
        templateRows={{
          sm: 'repeat(1, 0)',
          lg: 'repeat(2, 1fr)',
        }}
        gap={40}
      >
        <GridItem
          padding={sideBarPadding}
          rowSpan={2}
          colSpan={{ base: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
          display="flex"
          alignContent="center"
          as="div"
          flexDirection={'row'}
        >
          <SideBar />
        </GridItem>

        <GridItem
          as="main"
          padding={mainContent}
          rowSpan={2}
          colSpan={{ base: 1, sm: 2, md: 2, lg: 3, xl: 3 }}
          overflow="hidden"
        >
          <Stack w="100" spacing={24}>
            <FadeLayout>
              <Box
                id="aboutMe"
                className="contentRow"
                minH={{ lg: '80vh' }}
                display="flex"
                alignItems="center"
                paddingTop={{ base: 0, lg: 20, xl: 0 }}
                paddingBottom={{ base: 12, lg: 0 }}
                flexDirection={{
                  base: 'column-reverse',
                  lg: 'row',
                }}
              >
                <About />
                <SiteAvatar />
              </Box>
            </FadeLayout>

            <FadeLayout>
              <Box
                id="jobs"
                className="contentRow"
                minH={{ lg: '100vh' }}
                marginTop={'20%'}
                paddingTop={{ base: 0, lg: 20, xl: 0 }}
                paddingBottom={{ base: 12, lg: 10 }}
                paddingX={0}
                flexDirection={'row'}
              >
                <Experience />
              </Box>
            </FadeLayout>

            <FadeLayout>
              <Box
                id="works"
                className="contentRow"
                paddingTop={{ base: 0, lg: 20, xl: 20 }}
                paddingBottom={{ base: 12, lg: 10 }}
                paddingX={0}
                flexDirection={'row'}
              >
                <Works />
              </Box>
            </FadeLayout>

            <FadeLayout>
              <Box
                id="blog"
                className="contentRow"
                paddingTop={{ base: 0, lg: 20, xl: 20 }}
                paddingBottom={{ base: 12, lg: 10 }}
                paddingX={0}
                flexDirection={'row'}
              >
                <DevToArticles articles={articles} />
              </Box>
            </FadeLayout>

            <FadeLayout>
              <Box
                id="contact"
                className="contentRow"
                paddingTop={{ base: 0, lg: 20, xl: 20 }}
                paddingX={0}
                flexDirection={'row'}
              >
                <GetInTouch />
              </Box>
            </FadeLayout>

          </Stack>
        </GridItem>
      </Grid>
      <ScrollHelper />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://dev.to/api/articles?username=aravindasiva')
  const articles = await res.json()
  return {
    props: {
      articles,
    },
  }
}
