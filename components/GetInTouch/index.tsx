import { memo } from 'react'
import { Heading, Text, Stack, Link, Icon, Box, Center } from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { RiHeartPulseFill, RiCopyleftLine, RiGithubFill } from 'react-icons/ri'

const GetInTouch = () => {
  const [ref, inView] = useInView()
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      px={10}
      spacing={{ base: 6, xl: 8 }}
      as="footer"
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        That's all Folks!{' '}
        <Text as="span" fontSize="2xl" variant="emphasis">
          <motion.div
            style={{ display: 'inline-block' }}
            // variants={rimuruVariant}
            ref={ref}
            // animate={inView ? ['shake'] : false}
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 90 }}
            exit={{ opacity: 0, x: 70 }}
            transition={{ duration: 0.9 }}
          >
            <Text>(╭ರ_⊙) </Text>
          </motion.div>
        </Text>
      </Heading>
      <Text variant="description">
        Although I am working and doing fun projects on my free time, I do reply to messages as long as my social battery is up. Coding, work, movies or even weeb
        games, design, or whatever. So don't be a stranger and drop a message on any socials or
        <Link
          href="mailto:aravindcva@hotmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <b>{' '}email me</b>
        </Link>
        .
      </Text>

      <Box
        spacing={0.5}
        textAlign="center"
        fontFamily="monospace"
        paddingTop={{ base: 10, lg: 20, xl: 20 }}
        paddingBottom={{ base: 5, lg: 18 }}
      >
        <Link
          variant="description"
          textDecoration="none"
          rel="noreferrer"
          href="https://github.com/aravindasiva/portfolio-v1"
          target="_blank"
          _focus={{ boxShadow: 'none' }}
        >
          <Text as="span">
            <Icon as={RiGithubFill} h={6} w={6} /> <br />
            Made with <Icon as={RiHeartPulseFill} /> <br />
            Aravinda Siva <Icon as={RiCopyleftLine} /> 2022
          </Text>
        </Link>
      </Box>
    </Stack>
  )
}

export default memo(GetInTouch)