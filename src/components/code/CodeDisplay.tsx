import { HStack, VStack, Code, Box } from "@chakra-ui/react";

const Tag = ({
  el,
  indent,
  close = false,
}: {
  el: string;
  indent: number;
  close?: boolean;
}) => (
  <HStack spacing="0" pl={`${indent}px`}>
    <Code color="gray.700" bg="none">
      {`<${close ? "/" : ""}`}
    </Code>
    <Code color="pink.400" bg="none">
      {el}
    </Code>
    <Code color="gray.700" bg="none">
      {">"}
    </Code>
  </HStack>
);

const HTMLTag = ({
  el,
  indent,
  children,
}: {
  el: string;
  indent: number;
  children: any;
}) => (
  <VStack spacing="0" textAlign={"left"} alignItems="start">
    <Tag el={el} indent={indent * 30} />
    {children}
    <Tag el={el} indent={indent * 30} close />
  </VStack>
);

const Content = ({ children, indent }: { children: any; indent: number }) => (
  <Code
    bg="none"
    display="flex"
    pl={`${indent * 30}px`}
    color="white"
    maxW="lg"
    fontSize="12px"
  >
    {children}
  </Code>
);

const LineNumbers = ({ length }: { length: number }) => {
  const lines = [];
  for (let i = 0; i < length; i++) {
    lines.push(i + 1);
  }
  return (
    <Code
      bg="none"
      color="gray.700"
      fontSize="12px"
      fontWeight="bold"
      pr="1rem"
      maxW="2.2rem"
    >
      {lines.join("\n")}
    </Code>
  );
};

export function CodeDisplay({ text }: { text: string }) {
  return (
    <VStack
      bg="#0F1629"
      border="1px solid"
      borderColor="gray.700"
      rounded="lg"
      justify="start"
      align="start"
      w="auto"
      shadow="xl"
    >
      <HStack h="2rem" w="100%" borderBottom="1px solid" borderColor="gray.700">
        {/* status bar */}
        <Box w=".5rem" h=".5rem" bg="red.300" rounded="full" ml="1rem" />
        <Box w=".5rem" h=".5rem" bg="yellow.300" rounded="full" ml="1rem" />
        <Box w=".5rem" h=".5rem" bg="green.300" rounded="full" ml="1rem" />
      </HStack>
      <HStack p=".5rem" spacing="0">
        <LineNumbers length={14} />
        <VStack spacing="0">
          <HTMLTag el="html" indent={0}>
            <HTMLTag el="h1" indent={1}>
              <Content indent={2}>Hello, I'm&#160;{text}</Content>
            </HTMLTag>
            <HTMLTag el="p" indent={1}>
              <Content indent={2}>
                I'm a self-taught frontend developer based in Salt Lake City,
                Utah. My goal is to create engaging experiences for users, with
                a fine balance of technology and design.
              </Content>
            </HTMLTag>
          </HTMLTag>
        </VStack>
      </HStack>
    </VStack>
  );
}
