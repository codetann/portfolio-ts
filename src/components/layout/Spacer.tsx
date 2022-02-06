import { Box } from "@chakra-ui/react";

type Props = {
  amount: number;
};

export function Spacer({ amount }: Props) {
  return <Box h={`${amount}rem`} />;
}
