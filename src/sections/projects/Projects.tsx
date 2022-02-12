import React from "react";
import { Section, SectionHeader } from "@components";
import { FaBolt } from "react-icons/fa";

type Props = {};

export function Projects({}: Props) {
  return (
    <Section>
      <SectionHeader
        icon={FaBolt}
        color="purple"
        label="Projects"
        heading="Open Source Projects"
      />
    </Section>
  );
}
