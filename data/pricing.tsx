import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Pricing for every stage',
  description:
    '',
  plans: [
    {
          id: 'exploree_jobs',
          title: 'Exploree Jobs',
          description: 'Connect with top talent and opportunities in a wide range of industries.',
          price: '135.00 Birr/job post after one free year',
          freePeriod: 'Free for one year from launch day',
          features: [
            { title: 'Freemium model for employers' },
            { title: 'Completely free for job seekers' },
            { title: 'Real-time job post updates' },
            { title: 'Advanced filtering options' },
            { title: 'Direct applications through the platform' },
          ],
          action: {
            href: '#sign-up-jobs',
            label: 'Sign Up for Jobs'
          },
        },
        {
          id: 'exploree_tenders',
          title: 'Exploree Tenders',
          description: 'Access and alert on public and private sector tenders.',
          price: 'Birr 1,800.00 for one year subscription',
          features: [
            { title: '100% Free for tender ad providers' },
            { title: 'Annual subscription for tender alerts' },
            { title: 'Instant notifications on new tenders' },
            { title: 'Comprehensive tender details and documents' },
          ],
          action: {
            href: '#sign-up-tenders',
            label: 'Subscribe to Tenders'
          },
        },
        {
          id: 'exploree_opportunities',
          title: 'Exploree Opportunities',
          description: 'Unlock educational and professional growth opportunities.',
          price: 'Birr 3,600.00 for one year subscription',
          features: [
            { title: '100% Free for opportunity ad providers' },
            { title: 'Subscription-based alerts for scholarships and more' },
            { title: 'Tailored alerts based on user preferences' },
            { title: 'Access to exclusive educational resources' },
          ],
          action: {
            href: '#sign-up-opportunities',
            label: 'Subscribe to Opportunities'
          },
        }
      
      ]
      
      ,
      action: {
        href: 'https://appulse.gumroad.com/l/saas-ui-pro-pre-order?variant=Unlimited%20license',
      },
    }

