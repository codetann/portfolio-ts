import { useState } from "react";
import { icons } from "./icons";
import { motion } from "framer-motion";
import { Styles, IconProps } from "./types";
import { HStack, Text, VStack } from "@chakra-ui/react";

const styles: Styles = {
  iconRow: {
    w: "100%",
    maxW: "3xl",
    justify: "space-between",
    fontSize: "28px",
    wrap: "wrap",
  },
  iconContainer: (isHovered: boolean, color: string) => ({
    color: isHovered ? color : "whiteAlpha.400",
    transition: "all .2s",
    p: "1rem",
  }),
  iconText: (isHovered: boolean) => ({
    fontSize: "16px",
    opacity: isHovered ? 1 : 0,
  }),
};

export function Skills() {
  return (
    <HStack {...styles.iconRow}>
      {icons.map((icon, i) => (
        <Icon key={i} icon={icon.icon} label={icon.label} color={icon.color} />
      ))}
    </HStack>
  );
}

const Icon = ({ icon: Icon, label, color }: IconProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{ y: isHovered ? -10 : 0 }}
    >
      <VStack {...styles.iconContainer(isHovered, color)}>
        <Icon />
        <Text {...styles.iconText(isHovered)}>{label}</Text>
      </VStack>
    </motion.div>
  );
};
