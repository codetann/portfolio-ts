import { Section, Spacer } from "@components";
import { FaBriefcase } from "react-icons/fa";
import SectionHeader from "src/components/layout/SectionHeader";
import {
  Image,
  Text,
  TextProps,
  VStack,
  Heading,
  HStack,
  chakra,
  Button,
  StackProps,
  ImageProps,
} from "@chakra-ui/react";
import { IoMdArrowDropright } from "react-icons/io";
import jobs from "./data.json";
import { useState } from "react";

type Props = {};

type Jobs = Job[];

type Job = {
  company: string;
  title: string;
  dates: string;
  descriptions: string[];
  logo: string;
};

type Styles = {
  text: TextProps;
  jobCard: StackProps;
  jobTitle: TextProps;
  jobDates: TextProps;
  jobLogo: ImageProps;
};

// styles
const styles: Styles = {
  text: {
    color: "text.light",
    textAlign: "center",
    transition: "all 0.1s ease-in-out",
  },
  jobCard: {
    bg: "#162032",
    padding: "2rem",
    borderRadius: "lg",
    align: "left",
    spacing: ".5rem",
    maxW: "3xl",
  },
  jobTitle: {
    color: "blue.300",
    fontSize: "2xl",
  },
  jobDates: {
    color: "whiteAlpha.600",
    fontSize: "14px",
  },
  jobLogo: {
    width: "3rem",
    height: "3rem",
    borderRadius: "xl",
  },
};

export function Experience({}: Props) {
  return (
    <Section>
      <SectionHeader
        icon={FaBriefcase}
        color="blue"
        label="Work Experience"
        heading="Full Stack Developer"
      />
      <Spacer amount={1} />
      <Text {...styles.text}>
        I'm a developer and photographer. I've been working as a developer for
        over a year and a half, and I've been a photographer for about a year.
        I've been working on a few projects, but I'm always looking for new
        challenges.
      </Text>
      <Spacer amount={3} />
      <JobTabs jobs={jobs} />
    </Section>
  );
}

const JobTabs = ({ jobs }: any) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <VStack>
      <HStack>
        {jobs.map((job: Job, index: number) => (
          <Button key={index} onClick={() => setActiveTab(index)}>
            {job.company}
          </Button>
        ))}
      </HStack>
      <Spacer amount={1} />
      {jobs.map(
        (job: Job, index: number) =>
          index === activeTab && (
            <JobCard
              descriptions={job.descriptions}
              company={job.company}
              title={job.title}
              dates={job.dates}
              logo={job.logo}
            />
          )
      )}
    </VStack>
  );
};

const JobCard = ({ title, company, dates, descriptions, logo }: Job) => (
  <VStack {...styles.jobCard}>
    <Image {...styles.jobLogo} src={logo} />
    <HStack pb=".2rem" pt="1rem">
      <Heading fontSize="2xl">{title}</Heading>
      <Heading {...styles.jobTitle}>{`@ ${company}`}</Heading>
    </HStack>
    <Text {...styles.jobDates}>{dates}</Text>
    {descriptions.map((description, index) => (
      <Text
        key={index}
        fontSize="14px"
        display="flex"
        color="whiteAlpha.800"
        pb=".5rem"
      >
        <chakra.span color="blue.400" fontSize="lg">
          <IoMdArrowDropright />
        </chakra.span>
        {description}
      </Text>
    ))}
  </VStack>
);
