import {
  Heading,
  Text,
  HStack,
  Button,
  TextProps,
  ButtonProps,
  HeadingProps,
  StackProps,
} from "@chakra-ui/react";
import { Section, Spacer, CodeDisplay } from "@components";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaRegEnvelope, FaArrowDown } from "react-icons/fa";

// types
type Props = {};
type Styles = {
  text: TextProps;
  button: ButtonProps;
  heading: HeadingProps;
  buttonText: TextProps;
  buttonRow: StackProps;
};

// styles
const styles: Styles = {
  text: {
    color: "text.light",
    textAlign: "center",
    transition: "all 0.1s ease-in-out",
  },
  heading: {
    as: "h1",
    lineHeight: "60px",
    fontWeight: "black",
    letterSpacing: "-1.5px",
    fontSize: ["48px", "60px"],
  },
  buttonText: {
    pl: ".5rem",
  },
  button: {
    p: "1.5rem",
    rounded: "lg",
    display: "flex",
    fontSize: "14px",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonRow: {
    spacing: "1rem",
  },
};

// components
export function Hero({}: Props) {
  return (
    <Section>
      <Heading {...styles.heading}>Hello, I'm Tanner!</Heading>
      <Spacer amount={2} />
      <Text {...styles.text}>
        I'm a self-taught frontend developer based in Salt Lake City, Utah. My
        goal is to create engaging experiences for users, with a fine balance of
        technology and design.
      </Text>
      <Spacer amount={2} />
      <HStack {...styles.buttonRow}>
        <ContactButton />
        <ResumeButton />
      </HStack>
      <Spacer amount={4} />
      <CodeDisplay text="" />
    </Section>
  );
}

// const MotionButton = ({
//   css,
//   icon,
//   children,
// }: {
//   css: ButtonProps;
//   icon: JSX.Element;
//   children: any;
// }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   <Button
//     {...styles.button}
//     {...css}
//     onMouseEnter={() => setIsHovered(true)}
//     onMouseLeave={() => setIsHovered(false)}
//   >
//     {children}
//   </Button>;
// };

const ContactButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Button
      {...styles.button}
      bg="blue.400"
      _hover={{ bg: "blue.300" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div animate={{ x: isHovered ? -5 : 0 }}>
        <FaRegEnvelope />
      </motion.div>
      <Text {...styles.buttonText}>Contact</Text>
    </Button>
  );
};

const ResumeButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      {...styles.button}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div animate={{ y: isHovered ? 3 : 0 }}>
        <FaArrowDown />
      </motion.div>
      <Text {...styles.buttonText}>Resume</Text>
    </Button>
  );
};
