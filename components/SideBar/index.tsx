import {
  Stack,
  Heading,
  Button,
  useColorMode,
  Container,
  Link,
  Text,
  Box,
  Icon,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { fadeInUp, letterSpace, simpleOpacity, stagger } from '../../config/animation'
import styles from './styles.module.css'

const SideBar = () => {

  const DURATIONS = {
    VeryFast: 0.3,
    Fast: 0.6,
    Normal: 0.8,
    Slow: 1.2,
    VerySlow: 1.8,
  }
  const easing = [0.6, -0.05, 0.01, 0.99]

  const scaleUp = {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      opacity: [0, 1],
      scale: [0.7, 1.09, 1],
      transition: {
        duration: DURATIONS.VerySlow,
        ease: easing,
      },
    },
    lightMode: {
      opacity: [0, 1],
      scale: [0.7, 1.09, 1],
      transition: {
        duration: DURATIONS.VerySlow,
        ease: easing,
      },
    },
  }

  const { colorMode } = useColorMode()
  const display = useBreakpointValue({ base: 'none', lg: 'block' })
  const MotionBox = motion(Box)
  const surNameSize = useBreakpointValue({ base: '3xl', md: '4xl' })
  const MotionHeading = motion(Heading)
  const MotionText = motion(Text)
  const MotionStack = motion(Stack)
  const MotionButton = motion(Button)

  return (
    <MotionBox
      initial="initial"
      animate="animate"
      position={{ xl: 'fixed' }}
      maxWidth={{ xl: '34%' }}
      top={{ lg: 0 }}
    >
      <motion.div
        id="sidebarCircle"
        className={`${styles.sidebar} ${colorMode === 'light' ? styles.dark : ''}`}
        variants={scaleUp}
        style={{ display: display }}
        animate={colorMode === 'dark' ? 'animate' : 'lightMode'}
      ></motion.div>

      <Container
        padding={10}
        margin={0}
        height={{ xl: '100vh' }}
        display={{ xl: 'flex' }}
        alignItems={{ xl: 'center' }}
      >
        <MotionStack variants={stagger} spacing={6} w="100">
          <MotionText
            variants={fadeInUp}
            delay={1}
            variant="accent"
            fontFamily='Inter'
            fontWeight="light"
            fontSize={24}
          >
            Hello there!! I am
          </MotionText>
          <MotionHeading
            as="h2"
            size={surNameSize}
            variant="emphasis"
            fontFamily={'Mont'}
            textTransform="uppercase"
            variants={letterSpace}
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
          >
            Aravinda
          </MotionHeading>
          <MotionHeading
            className={styles.marginTopForce}
            as="h2"
            size="4xl"
            // paddingRight={{ lg: '20' }}
            textTransform="uppercase"
            whileHover={{ scale: 1.3 }}
            variants={letterSpace}
            fontFamily={'Mont'}
          >
            Siva
          </MotionHeading>

          <MotionHeading
            as="h3"
            size="md"
            variant="emphasis"
            className={styles.marginTopSmall}
            variants={fadeInUp}
            fontFamily={'Mont'}
            fontWeight={300}
          >
            // Full Stack Developer
          </MotionHeading>

          <MotionText
            variant="description"
            fontSize="medium"
            fontFamily={'Inter'}
            fontWeight='500'
            paddingRight={{ lg: '12' }}
            variants={fadeInUp}
            maxWidth={{ base: '100%', lg: '80%' }}
          >
            Hey! How nice of you to look at my personal site,
            <Text variant="emphasis" as="span">
              {' '}
              Thank you!<br/>
            </Text>
            <br />I am software engineer that specializes at backend apis, front
            end integration, recently found myself studying UX too.
          </MotionText>
          <MotionButton
            size="lg"
            variant="outline"
            borderWidth="4px"
            borderTopColor='transparent'
            borderBottomColor='transparent'
            borderRadius="full"
            fontWeight="600"
            fontSize="sm"
            width="120px"
            variants={simpleOpacity}
            as={'a'}
            href="mailto:aravindcva@hotmail.com"
            target="_blank"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            fontFamily={'Inter'}
          >
            Get in touch!
          </MotionButton>

          <MotionBox d="flex" variants={simpleOpacity}>
            {/* {SocialMedias.map((socMedia) => (
              <Link
                variant="description"
                key={socMedia.label}
                aria-label={socMedia.label}
                rel="noreferrer"
                width={8}
                href={socMedia.href}
                target="_blank"
                _focus={{ boxShadow: 'none' }}
              >
                <Icon w={6} h={6} as={socMedia.icon} color="currentColor" />
              </Link>
            ))} */}
          </MotionBox>
        </MotionStack>
      </Container>
    </MotionBox>
  )
}

export default SideBar