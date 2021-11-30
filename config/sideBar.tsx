import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaDev,
} from 'react-icons/fa'

export type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aravindasiva/',
    icon: FaLinkedin,
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/aravindasiva',
    icon: FaTwitter,
  },
  {
    label: 'Github',
    href: 'https://github.com/aravindasiva',
    icon: FaGithub,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/aravind_cva/',
    icon: FaInstagram,
  },
  {
    label: 'Dev.to',
    href: 'https://dev.to/aravindasiva',
    icon: FaDev,
  },
]