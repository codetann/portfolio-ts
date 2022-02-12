import {
  Center,
  CenterProps,
  StackProps,
  VStack,
  Heading,
  Text,
  TextProps,
} from "@chakra-ui/react";

interface Props {
  icon: any;
  color: string;
  label: string;
  heading: string;
}
interface Styles {
  sectionHeader: StackProps;
  headerIcon: (color: string) => CenterProps;
  label: (color: string) => TextProps;
  heading: TextProps;
}

const styles: Styles = {
  sectionHeader: {
    spacing: 5,
    align: "center",
  },
  headerIcon: (color: string) => ({
    ringColor: `${color}.200`,
    bg: `${color}.400`,
    color: `${color}.900`,
    rounded: "full",
    fontSize: "2xl",
    ring: "4px",
    w: "4rem",
    h: "4rem",
  }),
  label: (color: string) => ({
    as: "h4",
    fontSize: "text.label",
    fontWeight: "semibold",
    color: `${color}.400`,
  }),
  heading: {
    as: "h2",
    color: "white",
    fontSize: "text.heading",
    fontWeight: "black",
    letterSpacing: "-.025em",
    pb: "-0.5.5rem",
  },
};

export function SectionHeader({ icon, color, label, heading }: Props) {
  return (
    <VStack {...styles.sectionHeader}>
      <HeaderIcon icon={icon} color={color} />
      <VStack spacing={-2} ml="2rem" align="center">
        <Text {...styles.label(color)}>{label}</Text>
        <Text {...styles.heading}>{heading}</Text>
      </VStack>
    </VStack>
  );
}

const HeaderIcon = ({ icon: Icon, color }: { icon: any; color: string }) => {
  return (
    <Center {...styles.headerIcon(color)}>
      <Icon />
    </Center>
  );
};
