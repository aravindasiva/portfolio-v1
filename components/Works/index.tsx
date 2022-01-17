import React, { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
  Tooltip,
  Link
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import WorkCard from './WorkCard'
import { fadeInUpSlower, galleryStagger } from '../../config/animation'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const Works = () => {
  const isMobile = useBreakpointValue({
    base: true,
    md: true,
    lg: true,
    xl: false,
  })
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
      p={10}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Some of my works.
      </Heading>
      <Text variant="description">
        Hey! Here are some of my works I do in my
        <Tooltip
          label="yes, I have social life too, now stop judging 🤨"
          aria-label="social life"
          hasArrow
          borderRadius={8}
        >
          <Text as="span" variant="siteColor">
            {' '}<b>free time.</b>
          </Text>
        </Tooltip>{' '}
        All projects are open source and are under MIT-License. Projects can be found {' '}
        <Link href="https://github.com/aravindasiva?tab=repositories" target="_blank" rel="noreferrer">
          <b>here.</b>
        </Link>
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <WorkCard
            idx={1}
            title="CyberTruck"
            src="/works/work_cybertruck.gif"
            description="A CyberTruck concept landing page where you can customize your cybertruck in 3D with different color for each body parts.  This project is built with NextJS, ThreeJS, ThreeFiber and more."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://cybertruck-concept.vercel.app/"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <WorkCard
            idx={2}
            title="Demotivation API"
            description="A GraphQL API for getting random demotivational quotes or all the quotes. This is a Open API hosed on heroku with GraphQL playground to play with."
            src="/works/works_demotivation_api.gif"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://demotivation-quotes-api.herokuapp.com/graphql"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <WorkCard
            idx={3}
            title="Negative Space"
            description="A NextJS project consuming Demotivation quotes API showing random quotes everytime requested. This project also uses Framer Motion for animation."
            src="/works/works_negativeSpace.gif"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://negative-space.netlify.app"
            objectPosition="left 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <WorkCard
            idx={4}
            title="Smooth Scroll Boilerplate"
            description="This is a head start boilerplate for people who wants to build a SPA application with nextJS, Storybook, ChakraUI with smooth scroll"
            src="/works/works_nextBoilerplate.gif"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://next-smooth-scroll-template.vercel.app/"
            isMobile={isMobile}
          />
        </MotionGridItem>
      </MotionGrid>
    </Stack>
  )
}

export default memo(Works)