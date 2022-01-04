import { Link } from '@chakra-ui/react'

export type Company = 'Pego' | 'CriticalTechworks'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  Pego: {
    name: 'Pego',
    longName: 'Pego',
    subDetail: '',
    url: 'https://www.pego.co.uk/',
    position: 'Full Stack Developer',
    duration: 'Feb 2021 - Present',
    logo: {
      light: '/worked_at_logos/pegoBlack.png',
      dark: '/worked_at_logos/pegoWhite.png',
    },
    roles: [
      <>
        Started as an early member of PEGO, working on various cutting edge Technologies for Smart workplace and Hygiene.{' '}
      </>,
      <>Worked on Apis, WebApps, and Cloud Services</>,
      <>WebGL and 3D model Integration to web</>
    ],
  },
  CriticalTechworks: {
    name: 'Critical Techworks',
    longName: 'Critical Techworks',
    subDetail: 'We are changing the way the world moves',
    url: 'https://www.criticaltechworks.com//',
    position: 'Star Protégé',
    duration: 'March 2019 - Jan 2020',
    logo: {
      light: '/worked_at_logos/criticalTechworks.png',
      dark: '/worked_at_logos/criticalTechworks.png',
    },
    roles: [
      <>
        Critical TechWorks is a company formed as a result of a partnership between{' '}
        <Link
          aria-label="BMW Group"
          href="https://www.bmwgroup.com/"
          target="_blank"
          rel="noreferrer"
        >
          BMW Group
        </Link>{' '}
        and{' '}
        <Link
          aria-label="Critical Software"
          href="https://criticalsoftware.com/"
          target="_blank"
          rel="noreferrer"
        >
          Critical Software
        </Link>{' '}
      </>,
      <>
        Created multiple features for Learning Management portal for employees
      </>,
      <>
        Worked on maintaining and developing API
      </>,
      <>
        Worked on SOAP API, Creating Wrapper API.
      </>,
    ],
  }
}

export const ExperiencesList = [
  Experiences.Pego,
  Experiences.CriticalTechworks,
]