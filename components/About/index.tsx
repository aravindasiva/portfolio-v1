import { memo } from 'react'
import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Icon,
  SimpleGrid,
  Box,
  Tooltip,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  SiDotnet,
  SiJavascript,
  SiTypescript,
  SiGraphql,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiDocker,
} from 'react-icons/si'
import { GiCoffeePot } from 'react-icons/gi'
import { IoMdOpen } from 'react-icons/io'

type ISkillSetModal = {
  onOpen(): void
}

const About = () => {
  const baseTheme = useColorModeValue('dark', 'light')
  const siteColor = useColorModeValue("site.light", "site.dark");
  const fontTheme = useColorModeValue("", "gray.300")
  const currentYear = new Date().getFullYear()
  const codingYears = currentYear - 2016

  return (
    <Stack width={{ base: '100%', lg: '70%' }} spacing={{ base: 6, xl: 8 }} p={10}>
      <Heading
        as="h4"
        size="2xl"
        fontFamily={'Mont'}
        textTransform="uppercase"
        letterSpacing={1.8}
      >
        who am i
      </Heading>
      <Text 
      color={fontTheme}
      fontFamily={'Inter'}
      fontSize={14}
      >
        I've been coding for {codingYears} years now and
        currently working as a
        <Tooltip 
          label='Not an expert, always got room to learn 🤓'
          aria-lable='Expert?'
          hasArrow
          borderRadius={8}
        >
          <Text as={'span'}>
            <b>{' '}Full Stack Developer</b>
          </Text>
        </Tooltip> {' '} focusing on frontend web development and mobile development. <br /> <br /> Even
        <Tooltip
          label="I've no idea what I am doing, but it's fun 🥳"
          aria-label="No Idea"
          hasArrow
          borderRadius={8}
        >
          <Text as="span" variant="siteColor">
            {' '}<b>3D model integration, WebGL</b>
          </Text>
        </Tooltip>{' '}
        stuff now, how time flies!
        <br /> <br />
        Here are few technologies that are my cup of{' '}
        <Tooltip
          label="I only drink tea if I needed too!"
          aria-label="I hate Tea!"
          hasArrow
        >
          <Text as="span" variant="siteColor" textDecorationLine="line-through">
            tea
          </Text>
        </Tooltip>{' '}
        coffee <Icon as={GiCoffeePot} color={siteColor} />.
      </Text>

      <SimpleGrid columns={2} spacing={4}>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiDotnet} color={siteColor} fontSize="2em" />
            C# - .NET.Core
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiJavascript} color={siteColor} fontSize="2em" />
            Javascript (ES6+)
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiTypescript} color={siteColor} fontSize="2em" />
            Typescript
          </ListItem>

          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNodedotjs} color={siteColor} fontSize="2em" />
            Node
          </ListItem>
        </List>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiGraphql} color={siteColor} fontSize="2em" />
            Graphql
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiReact} color={siteColor} fontSize="2em" />
            React
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNextdotjs} color={siteColor} fontSize="2em" />
            NextJS
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiDocker} color={siteColor} fontSize="2em" />
            Docker
          </ListItem>
        </List>
      </SimpleGrid>
    </Stack>
  )
}

export default About