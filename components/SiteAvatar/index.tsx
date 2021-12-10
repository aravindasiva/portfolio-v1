import {
  Box,
  Image as ChkImage,
  Text,
  Link,
  SkeletonCircle,
  useColorModeValue,
  Tooltip
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import React, { useEffect } from 'react'
import { avatarAnimation } from '../../config/animation'

const AvatarImages = {
  DarkMode: '/avatar_dark.png',
  LightMode: './avatar_light.png',
}

declare global {
  interface Window {
    preloadedPictures?: HTMLImageElement[]
  }
}

const SiteAvatar = () => {
  const MotionBox = motion(Box)
  const imgAvatar = useColorModeValue(
    AvatarImages.LightMode,
    AvatarImages.DarkMode
  )
  const themeTooltipLabel = useColorModeValue('Whoa, Soo Bright 😎', 'How you doin ??')
  useEffect(() => {
    // Some nice preloading and caching
    const images = [AvatarImages.DarkMode, AvatarImages.LightMode]
    const preloadedImages = images.map((imageSrc) => {
      const img = new Image()
      img.src = imageSrc
      return img
    })
    window.preloadedPictures = preloadedImages
  }, [])
  return (
    <AnimatePresence>
      <MotionBox
        id="sivaAvatar"
        boxSize={{ base: 64, lg: 'sm' }}
        padding={{ base: 8 }}
        marginBottom={{ base: 10, md: 0, lg: 0 }}
        initial="initial"
        animate={'animate'}
        variants={avatarAnimation}
        exit={{ opacity: 0 }}
      >
        <Tooltip
          label={themeTooltipLabel}
          aria-label='dark and too bright'
          hasArrow
          borderRadius={8}
          p={2}
          placement='top'
        >
          <ChkImage
            src={imgAvatar}
            alt="Aravinda Siva"
            htmlWidth="250"
            htmlHeight="250"
            margin="auto"
            fallback={<SkeletonCircle height="100%" width="100%" />}
          />
        </Tooltip>
      </MotionBox>
    </AnimatePresence>
  )
}

export default SiteAvatar