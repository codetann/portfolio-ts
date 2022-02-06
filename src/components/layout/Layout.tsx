import { VStack, StackProps } from "@chakra-ui/react";

type Props = {
  children: JSX.Element[] | JSX.Element;
};

const styles: StackProps = {
  bg: "bg.primary",
  justify: "start",
  align: "center",
  spacing: "2rem",
  minH: "100vh",
  maxW: "100vw",
  as: "main",
  px: "1ren",
  w: "100%",
};

export function Layout({ children }: Props) {
  return <VStack {...styles}>{children}</VStack>;
}
