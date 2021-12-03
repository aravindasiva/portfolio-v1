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
  useColorModeValue,
  HStack,
  Tooltip,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { fadeInUp, fadeInUpSlower, handWave, iconScale, letterSpace, letterSpaceBig, simpleOpacity, stagger } from '../../config/animation'
import { SocialMedias } from '../../config/sideBar'
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
  const borderColor = useColorModeValue("site.light", "site.dark");
  const surNameSize = useBreakpointValue({ base: '3xl', md: '4xl' })
  const display = useBreakpointValue({ base: 'none', lg: 'block' })
  const MotionBox = motion(Box)
  const MotionHeading = motion(Heading)
  const MotionText = motion(Text)
  const MotionStack = motion(Stack)
  const MotionButton = motion(Button)
  const [ref, inView] = useInView()

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
          <HStack>
            <MotionText
              variants={fadeInUp}
              delay={1}
              variant="accent"
              fontFamily='Inter'
              fontWeight="500"
              fontSize={20}
            >
              Hello there
              {/* !! I am */}
            </MotionText>
            <Tooltip
              placement='top'
              label='High five ??'
              hasArrow
              borderRadius={8}
            >
              <MotionText
                cursor='grab'
                variants={fadeInUp}
                delay={1}
                variant="accent"
                fontFamily='Inter'
                fontWeight="500"
                fontSize={22}
                animate={{
                  rotate: 20,
                  transition: {
                    from: 0,
                    duration: 0.3,
                    ease: 'easeInOut',
                    type: 'tween',
                    yoyo: Infinity
                  },
                }}
                whileTap={{
                  rotate: 50,
                  scale: 6,
                }}
              >
                👋🏻
              </MotionText>
            </Tooltip>
            <MotionText
              variants={fadeInUp}
              delay={1}
              variant="accent"
              fontFamily='Inter'
              fontWeight="500"
              fontSize={22}
            >
              {'   I am'}
            </MotionText>
          </HStack>
          <MotionHeading
            as="h2"
            cursor='pointer'
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
            cursor='pointer'
            size="4xl"
            paddingRight={{ lg: '20' }}
            textTransform="uppercase"
            whileTap={{
              letterSpacing: ['0px', '10px', '0px'],
            }}
            variants={letterSpaceBig}
            fontFamily={'Mont'}
            color={borderColor}
          >
            Siva
          </MotionHeading>

          <MotionHeading
            as="h3"
            size="md"
            variant="emphasis"
            className={styles.marginTopSmall}
            variants={fadeInUp}
            color={borderColor}
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
            Hey! Nice of you to visit my personal site,
            <Text variant="emphasis" as="span">
              {' '}
              Thank you!<br />
            </Text>
            <br />I am Full Stack developer that specializes at frontend, backend integration, If you are lucky you can catch me doing some UX design.
          </MotionText>
          <MotionButton
            size="lg"
            variant="outline"
            borderWidth="3.5px"
            borderTopColor='transparent'
            borderBottomColor='transparent'
            borderLeftColor={borderColor}
            borderRightColor={borderColor}
            borderRadius="full"
            fontWeight="600"
            fontSize="sm"
            width="120px"
            variants={simpleOpacity}
            as={'a'}
            href="mailto:aravindcva@hotmail.com"
            target="_blank"
            whileHover={{
              rotate: [0, 25, 30, 0, -30, -25, 0],
              transition: {
                duration: 0.6,
                ease: easing,
              },
            }}
            whileTap={{ scale: 0.9 }}
            fontFamily={'Inter'}
          >
            Get in touch!
          </MotionButton>

          <HStack>
            {SocialMedias.map((socMedia) => (
              <MotionBox id={socMedia.href} d="flex" variants={simpleOpacity} whileHover={{ scale: 1.5 }}>
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
                  <Icon w={6} h={6} as={socMedia.icon} color="currentColor" _hover={{ color: 'borderColor' }} />
                </Link>
              </MotionBox>
            ))}
          </HStack>
        </MotionStack>
      </Container>
    </MotionBox>
  )
}

export default SideBar