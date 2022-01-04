import {
  Box,
  Image,
  ResponsiveValue,
  Divider,
  Skeleton,
  Text,
  SimpleGrid,
  Button,
  Container,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { DURATIONS, easing } from '../../config/animation'
import styles from './styles.module.css'

export type FeaturedCardProps = {
  // Still can't find what's correct value for responsive value
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  height: string | ResponsiveValue<any>
  src: string
  idx: number
  title: string
  description: string
  objectPosition?: string
  ctaUrl: string
  isMobile?: boolean
}

const variants = {
  normal: {
    opacity: 0.85,
  },
  hover: {
    scale: 1.1,
    opacity: 1,
    transition: {
      duration: DURATIONS.Fast,
      ease: 'backOut',
    },
  },
  tap: {
    scale: 0.85,
    opacity: 1,
    transition: {
      duration: DURATIONS.Fast,
      ease: easing,
    },
  },
}

const MotionImage = motion(Image)
const MotionButton = motion(Button)

const ProjectDescription = ({
  idx,
  title,
  description,
  ctaUrl,
  isLeft,
}: {
  idx?: number
  title: string
  description: string
  ctaUrl: string
  isLeft: boolean
}) => (
  <Container
    paddingX={5}
    paddingY={1}
    display="flex"
    alignItems="center"
    justifyContent="space-around"
    flexDirection="column"
  >
    <Stack spacing={1} width="100%">
      <Text
        fontSize={{ base: 'md', md: 'lg', 'xl': '2xl' }}
        fontWeight="bold"
        letterSpacing={1.5}
        width="90%"
        alignSelf={isLeft ? 'flex-end' : 'flex-start'}
        textTransform="uppercase"
        as="span"
      >
        <Text variant="accentAlternative" fontSize="md" as="span">
          #0{idx}
          {'  '}
        </Text>
        {title}
      </Text>
      <Divider
        borderColor="#A6A6A6"
        width="90%"
        marginLeft={0}
        alignSelf={isLeft ? 'flex-end' : 'flex-start'}
      />
    </Stack>
    <Text
      fontSize="smaller"
      variant="accentAlternative"
      width="90%"
      alignSelf={isLeft ? 'flex-end' : 'flex-start'}
      wordBreak="break-word"
      paddingY={{ base: 3, md: 0 }}
    >
      {description}
    </Text>
    <MotionButton
      variant="outlineAlternative"
      fontWeight="light"
      fontSize={{ base: 'sm', '2xl': 'md' }}
      size="sm"
      as="a"
      href={ctaUrl}
      rel="noreferrer"
      target="_blank"
      marginY={{ base: 3, md: 0 }}
      borderWidth="2px"
      borderTopColor='transparent'
      borderBottomColor='transparent'
      borderLeftColor={'gray.300'}
      borderRightColor={'gray.300'}
      borderRadius="full"
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
      View Project
    </MotionButton>
  </Container>
)

const WorkCard = ({
  idx,
  height,
  src,
  title,
  description,
  objectPosition,
  ctaUrl,
  isMobile,
}: FeaturedCardProps) => {
  const isLeftImage = isMobile ? false : idx % 2 === 0
  const bg = useColorModeValue('site.light', 'site.dark')
  const CoverImage = () => (
    <MotionImage
      height={height}
      width="100%"
      src={src}
      alt={title}
      objectFit="cover"
      objectPosition={objectPosition}
      loading="lazy"
      opacity={0.75}
      whileHover={variants.hover}
      whileTap={variants.tap}
      fallback={<Skeleton height={height} width="100%" />}
    />
  )

  return (
    <Box
      height="auto"
      bg={'none'}
      borderRadius="1em"
      className={styles.featureCard}
      borderColor={bg}
      borderWidth="2px"

    >
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 3, md: 0 }}
        display={{ base: 'flex', md: 'grid' }}
        flexDirection={{ base: 'column-reverse', md: 'initial' }}
      >
        {isLeftImage && <CoverImage />}
        <ProjectDescription
          idx={idx}
          title={title}
          description={description}
          ctaUrl={ctaUrl}
          isLeft={isLeftImage}
        />
        {!isLeftImage && <CoverImage />}
      </SimpleGrid>
    </Box>
  )
}
export default WorkCard