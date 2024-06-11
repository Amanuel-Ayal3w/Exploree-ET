


import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  
  seo: {
    title: 'Explree ET',
    description: '',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'features',
        label: 'Features',
      },
      {
        id: 'pricing',
        label: 'Pricing',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
      {
        label: 'Login',
        href: '/login',
      },
      {
        label: 'Sign Up',
        href: '/signup',
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Built by{' '}
        <Link href="">DM studios</Link>
      </>
    ),
    links: [
      {
        href: '',
        label: 'Contact',
      },
      {
        href: '',
        label: <FaTwitter size="14" />,
      },
      {
        href: '',
        label: <FaGithub size="14" />,
      },
    ],
  },
  signup: {
    title: 'Exploree ET',
    features: [
      {
        icon: FiCheck,
        title: 'Comprehensive Listings',
        description: 'Access a diverse range of job postings, tenders, and scholarships, all in one place.',
      },
      {
        icon: FiCheck,
        title: 'User-Friendly Interface',
        description: 'Our platform is designed for ease of use, ensuring that you can find what you need quickly and efficiently.',
      },
      {
        icon: FiCheck,
        title: 'Real-Time Updates',
        description: 'Stay ahead with real-time updates on new job postings, tenders, and scholarship opportunities.',
      },
      {
        icon: FiCheck,
        title: 'Tailored Alerts',
        description: 'Receive customized alerts based on your specific interests and requirements, helping you not miss any opportunities.',
      },
    ],
    
  },
}

export default siteConfig
