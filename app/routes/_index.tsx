import type { MetaFunction } from "@remix-run/node";

import { Flex, Box } from "@kuma-ui/core";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Flex flexDir="column">
        <Box>hoge</Box>
        <Box>fuga</Box>
      </Flex>
      <Flex flexDir="row">
        <Box>piyo</Box>
        <Box>zeyo</Box>
      </Flex>
    </div>
  );
}
