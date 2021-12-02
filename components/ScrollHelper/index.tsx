import {
  Box,
  Icon,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import { RiDirectionLine, RiMouseLine } from 'react-icons/ri'
import { motion, Variants, AnimatePresence } from 'framer-motion'
import useScrollDirection from "../../hooks/useScrollDirection";

const scrollMoreVariants: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  hidden: {
    opacity: [0, 1],
    transition: {
      duration: 0.5,
      delay: 1,
      ease: 'easeIn',
    },
  },
  bounce: {
    y: [0, -18, 0],
    transition: {
      duration: 1.6,
      ease: 'easeInOut',
      loop: Infinity,
    },
  },
}

const emailVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 250,
  },
  show: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: [1, 0],
    y: [0, 250],
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

const ScrollHelper = () => {
  const emailColor = useColorModeValue('gray.800', 'gray.400')
  const emailLine = useColorModeValue('teal.500', 'cyan.200')
  const direction = useScrollDirection()

  return (
    <Box
      position="fixed"
      bottom="1em"
      right="3%"
      display={{base: 'none', sm: 'block', lg: 'block'}}
    >
      <AnimatePresence>
        {(direction.isTop || direction.isUp) && (
          <motion.div
            initial="initial"
            animate={['hidden', 'bounce']}
            variants={scrollMoreVariants}
          >
            <Icon
              w={6}
              h={6}
              as={RiMouseLine}
              color="currentColor"
              opacity="0.75"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {(!direction.isTop && direction.isDown) && (
          <motion.div
            initial="hidden"
            animate="show"
            exit="exit"
            variants={emailVariants}
            whileHover={{ y: -50 }}
            style={{
              writingMode: 'vertical-rl',
              position: 'fixed',
              right: '8%',
              bottom: '-8%',
            }}
          >
            <Text
              as="a"
              paddingY={3}
              fontFamily="Inter"
              fontWeight='400'
              fontSize={14}
              href="mailto:aravindcva@hotmail.com"
              target="_blank"
              rel="noreferrer"
              color={emailColor}
              _hover={{
                color: emailLine,
                _after: {
                  backgroundColor: emailLine,
                  opacity: 1,
                },
              }}
              position="relative"
              letterSpacing={3}
              display="flex"
              alignItems="center"
              justifyContent="center"
              _after={{
                backgroundColor: emailLine,
                width: '2px',
                opacity: 0.5,
                content: '""',
                flex: 1,
                height: { base: '5em', xl: '8em' },
                margin: 'auto',
                marginTop: '10px',
              }}
            >
              aravindcva@hotmail.com{' '}
            </Text>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  )
}

export default ScrollHelper