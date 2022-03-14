import {
  Box,
  Input,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

export default function GlobalFilter({ setGlobalFilter, total }: any) {
  return (
    <Box w='100%' h='50px' bgGradient='linear(to-r, #0e0c2f, #5e5e7e)'>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          p={8}
          children={<Search2Icon color="blue" />}
        />
        <Input
          placeholder="Encontra.."
          onChange={(e) => {
            setGlobalFilter(e.target.value);
          }}
          p={8}
          ml={10}
          border="none"
          color="white"
          fontSize="xl"
          fontWeight="light"
          _focus={{ outline: "none" }}
          _placeholder={{ color: "white" }}
        />
      </InputGroup>
    </Box>
  );
}
