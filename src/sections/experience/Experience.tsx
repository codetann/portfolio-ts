import { Section } from "@components";
import { FaBriefcase } from "react-icons/fa";
import SectionHeader from "src/components/layout/SectionHeader";

type Props = {};

export function Experience({}: Props) {
  return (
    <Section>
      <SectionHeader
        icon={FaBriefcase}
        color="blue"
        label="Work Experience"
        heading="Full Stack Developer"
      />
    </Section>
  );
}
