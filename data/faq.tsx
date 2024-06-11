import * as React from 'react';

const faq = {
  title: 'Frequently Asked Questions',
  items: [
    {
      q: 'Can employers post job listings for free on Exploree?',
      a: (
        <>
          Yes, employers can post job listings for free during the first year after the launch date. 
          After the first year, a fee is required per job post, depending on the size of the company. 
          <br /> For more details on pricing, please refer to our pricing section.
        </>
      ),
    },
    {
      q: 'Can job seekers access all job listings for free?',
      a: "Yes, job seekers can access all job listings and apply directly through the Exploree platform at no cost. This service is provided free of charge for a lifetime.",
    },
    {
      q: 'Are there any fees for posting or accessing tenders on Exploree?',
      a: 'No, posting tenders on Exploree is completely free for all users. However, users who wish to receive electronic alerts for new tenders can subscribe to our service for a fee.',
    },
    {
      q: 'Does Exploree provide alerts for new opportunities?',
      a: 'Yes, Exploree provides a subscription-based alert system for new job opportunities, tenders, and scholarships. Subscribers can receive tailored alerts based on their specified interests and fields.',
    },
  ],
}

export default faq;
