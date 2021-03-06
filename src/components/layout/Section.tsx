import { StackProps, VStack } from "@chakra-ui/react";

type Props = {
  children: JSX.Element[] | JSX.Element;
};

const styles: StackProps = {
  as: "section",
  w: "100%",
  maxW: "4xl",
  align: "center",
  spacing: 0,
};

export function Section({ children }: Props) {
  return <VStack {...styles}>{children}</VStack>;
}
