import { StackProps, TextProps } from "@chakra-ui/react";

export interface Styles {
  iconRow: StackProps;
  iconContainer: (isHovered: boolean, color: string) => StackProps;
  iconText: (isHovered: boolean) => TextProps;
}

export interface IconProps {
  icon: any;
  label: string;
  color: string;
}
