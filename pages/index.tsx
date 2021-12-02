import {
  Box,
  Center,
  Grid,
  GridItem,
  Stack,
  useBreakpointValue
} from '@chakra-ui/react'
import React from 'react'
import ScrollHelper from '../components/ScrollHelper'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import SideBar from '../components/SideBar'
import SiteHeader from '../components/SiteHeader'
import SiteAvatar from '../components/SiteAvatar'
import FadeLayout from '../components/FadeLayout'
import About from '../components/About'

export default function Home() {

  const sideBarPadding = useBreakpointValue({ base: '5', md: '8', lg: '14' })
  const mainContent = useBreakpointValue({
    base: '5',
    md: '14',
    lg: '14',
    xl: 0,
  })

  return (
    <>
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
                  <SiteAvatar/>
              </Box>
            </FadeLayout>

            <Box
              id="jobs"
              className="contentRow"
              paddingTop={{ base: 0, lg: 20, xl: 0 }}
              paddingBottom={{ base: 12, lg: 10 }}
              paddingX={0}
              flexDirection={'row'}
            >
              <Section2 />
            </Box>

            <Box
              id="works"
              className="contentRow"
              paddingTop={{ base: 0, lg: 20, xl: 20 }}
              paddingBottom={{ base: 12, lg: 10 }}
              paddingX={0}
              flexDirection={'row'}
            >
              <Section3 />
            </Box>

          </Stack>
        </GridItem>
      </Grid>
      <ScrollHelper />
    </>
  )
}
