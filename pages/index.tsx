import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import { NextjsLogo, ChakraLogo } from "components/logos";
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from "react-icons/fi";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";

import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import testimonials from "data/testimonials";
import pricing from "data/pricing";

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="Exploree Et"
        description="Exploree ET"
      />
      <Box>
        <HeroSection />

        <HighlightsSection />

        <FeaturesSection />

        <TestimonialsSection />

        <PricingSection />

        <FaqSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Exploree ET
                <Br /> Opprtunity Faster
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Exploree ET 
          Streamline Your Business with Explree ET - Your Partner in Tenders, Job Postings, and Education..
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
                <NextjsLogo height="0px" /> <ChakraLogo height="0px" />
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="/signup">
                  Sign Up
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href=""
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        ".chakra-button:hover &": {
                          transform: "translate(5px)",
                        },
                      }}
                    />
                  }
                >
                  Dashboard
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src=""
                  layout="fixed"
                  width={0}
                  height={0}
                  alt=""
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: "User-Friendly",
            icon: FiSmile,
            description: "Our platform is designed with ease of use in mind, ensuring a smooth experience for all users .",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "Wide Network",
            icon: FiSliders,
            description:
              "Connect with a broad network of industries and sectors for jobs, tenders, and scholarships.",
            iconPosition: "left",
            delay: 0.8,
          },
          {
            title: "Customizable Alerts",
            icon: FiGrid,
            description:
              "Set up alerts to your specifications to never miss an opportunity in your field of interest.",
            iconPosition: "left",
            delay: 1,
          },
          {
            title: "Efficient Processing",
            icon: FiThumbsUp,
            description:
              " Streamline your searches and applications with tools designed for speed and accuracy.",
            iconPosition: "left",
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  );
};

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Offers">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
          Explore a world of opportunities with our comprehensive listings of tenders, job postings, and scholarships tailored for ambitious professionals and students alike.
          </Text>
</VStack>
      </HighlightsItem>
      <HighlightsItem title="Quality
      ">
        <Text color="muted" fontSize="lg">
        Ensure the safety of your data with advanced security measures integrated into all platforms.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Solomon"
        description="Founder"
        gradient={["pink.200", "purple.500"]}
      >
        "Exploree streamlined our access to essential market opportunities by offering an expansive array of tenders, job postings, and scholarships. This specialization saved us countless hours and allowed us to concentrate on strategic planning and growth from the outset."
      
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Start your next idea two steps ahead"
      >
        <Text color="muted" fontSize="lg">
        Begin your journey with Exploree, where we've already mapped out the essentials for you. Dive into a world where the best job positions, tenders, and scholarships are at your fingertips, saving you time and connecting you directly to prime opportunities. With Exploree, you're not just starting; you're ahead from the moment you join us
        </Text>
        <Wrap mt="8">
          {[
            "jobs",
            "opportunities",
            "tenders",
            "Scholarships",
          
    
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  );
};

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          Not your standard
          <Br /> Info provider
        </Heading>
      }
      description={
        <>
     
          <Br />
          Exploree offers all the essential tools you need to discover and leverage opportunities in job postings, tenders, and scholarships, effectively connecting you with your next big opportunity.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Tender Listings",
          
          description:"Access a wide range of public and private sector tenders with detailed insights to help you prepare the best bid.",
            
          variant: "inline",
        },
        {
          title: "Custom Alerts.",
         
          description:
            "   Set up personalized alerts to ensure you never miss an opportunity in your field of interest.",
          variant: "inline",
        },
        {
          title: "Job Postings.",
          
          description:
            "Explore job opportunities across various industries and levels, tailored to your skills and career goals.",
          variant: "inline",
        },
        {
          title: "Scholarship Listings.",
          
          description:
            " Find scholarships that match your academic interests and qualifications, from undergraduate to postgraduate levels.",
          variant: "inline",
        },
        {
          title: "Real-Time Updates..",
         
          description:
            " Stay ahead with real-time notifications on new tenders, job openings, and scholarship opportunities.",
          variant: "inline",
        },
        
        {
          title: "User-Friendly Interface.",
          
          description:
            " Navigate through our intuitive platform designed for optimal user experience.",
          variant: "inline",
        },
        {
          title: "Comprehensive Support.",
          
          description:
            "  Benefit from our extensive documentation, onboarding guides, and customer support to make the most of our services.",
          variant: "inline",
        },
        
        {
          title: "Diverse Options.",
         
          description: 
          "Our platform offers a variety of filters to refine your search and pinpoint exactly what you're looking for.",
          variant: "inline",
        },
      
      ]}
    />
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []]
    );
  }, []);

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1,2 ,3 ]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="0">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
    
      </Text>
    </Pricing>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        title: "",
        description:
          '<img src="https://img.shields.io/github/stars/saas-js/saas-ui.svg?style=social&label=Star" />',
        href: "https://github.com/saas-js/saas-ui",
        action: true,
      },
    },
  };
}


