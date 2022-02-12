import { Section, Spacer } from "@components";
import { FaBriefcase } from "react-icons/fa";
import SectionHeader from "src/components/layout/SectionHeader";
import { Text, TextProps } from "@chakra-ui/react";

type Props = {};

type Styles = {
  text: TextProps;
};

// styles
const styles: Styles = {
  text: {
    color: "text.light",
    textAlign: "center",
    transition: "all 0.1s ease-in-out",
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
    </Section>
  );
}
