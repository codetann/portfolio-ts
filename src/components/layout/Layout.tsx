import { VStack, StackProps } from "@chakra-ui/react";

type Props = {
  children: JSX.Element[] | JSX.Element;
};

const styles: StackProps = {
  bg: "bg.primary",
  justify: "start",
  align: "center",
  spacing: "8rem",
  minH: "100vh",
  maxW: "100vw",
  as: "main",
  px: "1ren",
  w: "100%",
};

export function Layout({ children }: Props) {
  return <VStack {...styles}>{children}</VStack>;
}
