import { Box, Image, Center, HStack, Icon, Link, VStack, Button } from '@chakra-ui/react'
import React from 'react'
import { FaHeartBroken } from 'react-icons/fa'
import Away from '../components/svg/Away/Away'
import HangingHook from '../components/svg/HangingHook'
import HangingTv from '../components/svg/HangingTV'
import { motion } from "framer-motion"


const Custom404 = () => {

  return (
    <Box zIndex={0} h='100vh' w='vw' bg='#ffff'>
      <Center p={10}>
        <Away />
        <Box
          zIndex={0}
          position={'absolute'}
          top='22%'
          right={'49.8%'}
        >
          <motion.div
            animate={{
              y: 15,
              transition: {
                duration: 2.002,
                yoyo: Infinity
              }
            }}
          >
            <HangingHook />
          </motion.div>
        </Box>
        <Box
          position={'absolute'}
          right='44%'
          top='39.1%'
        >
          <motion.div
            animate={{
              y: 15,
              transition: {
                duration: 2.002,
                yoyo: Infinity
              }
            }}
          >

            <motion.div
              animate={{
                originY: 0,
                rotate: [0, 10],
                transition: {
                  from: 0,
                  duration: 1.2,
                  yoyo: Infinity
                }
              }}
            >
              <HangingTv />
            </motion.div>
          </motion.div>
        </Box>
      </Center>
    </Box >
  )
}

export default Custom404