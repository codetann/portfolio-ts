import { ChakraProvider, extendTheme } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const colors = {
  text: {
    light: "#94a3b8",
  },
  bg: {
    primary: "#0B1120",
  },
};

const fontSizes = {
  text: {
    heading: "36px",
    label: "16px",
    body: "16px",
  },
};

const theme = extendTheme({
  config,
  colors,
  fontSizes,
});

export function ThemeProvider({ children }: Props) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
