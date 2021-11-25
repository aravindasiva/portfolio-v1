import {
  Stack,
  Heading,
  Text,
  Button,
  useColorMode,
  Container,
  Link,
  Box,
  Icon,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
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
      scale: [1, 1.05, 1],
      transition: {
        duration: DURATIONS.VerySlow,
        ease: easing,
      },
    },
    lightMode: {
      opacity: [0, 1],
      scale: [0.99, 1.05, 1],
      transition: {
        duration: DURATIONS.VerySlow,
        ease: easing,
      },
    },
  }

  const { colorMode } = useColorMode()
  const display = useBreakpointValue({ base: 'none', lg: 'block' })
  const MotionBox = motion(Box)

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
    </MotionBox>
  )
}

export default SideBar