import { memo } from 'react'
import { Heading, Text, Stack, Link } from '@chakra-ui/react'
import ExperienceTab from './ExperienceTab'
const DetailSection = () => (
  <Stack
    width={{ base: '99%', lg: '60%', xl: '75%' }}
    height="100%"
    spacing={{ base: 6, xl: 8 }}
    p={'10'}
  >
    <Heading
      size="2xl"
      style={{
        fontVariantCaps: 'small-caps',
      }}
    >
      Where have I worked
    </Heading>
    <Text variant="description">
      Since 2017, had a privilege to work with various team of students and companies which let me learn new technologies and made me what I am today. 
      I always have a special place in my heart for those teams and companies. I Currently work at{' '}
      <Link href="https://www.pego.co.uk/" target="_blank" rel="noreferrer">
        Pego
      </Link>
      .
    </Text>

    <ExperienceTab />
  </Stack>
)

export default memo(DetailSection)