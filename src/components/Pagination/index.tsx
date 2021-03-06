import { Flex, Button, SimpleGrid } from "@chakra-ui/react";

export default function Pagination({
  pageCount,
  goto,
  previous,
  next,
  canPrevious,
  canNext,
}: any) {
  const buttonProps = {
    bg: "bgGradient='linear(to-r, #0e0c2f, #5e5e7e)'",
    color: "white",
    rounded: "none",
    w: "full",
    p: [4, 6],

    _hover: {
      bg: "gray.900",
      opacity: 0.7,
    },
    _focus: {
      outline: "none",
      border: "none",
      bg: "gray.900",
    },
    _active: {
      bg: "gray.900",
    },
  };

  return (
    <Flex w="full" alignItems="center" justifyContent={["start", "end"]}>
      <SimpleGrid shadow="xl" columns={4}>
        <Button
          {...buttonProps}
          roundedBottomLeft="xl"
          onClick={() => goto(0)}
          disabled={canPrevious}
        >
          {"<<"}
        </Button>
        <Button
          {...buttonProps}
          onClick={() => previous()}
          disabled={canPrevious}
        >
          Voltar
        </Button>
        <Button {...buttonProps} onClick={() => next()} disabled={canNext}>
          Próximo
        </Button>
        <Button
          {...buttonProps}
          roundedBottomRight="xl"
          onClick={() => goto(pageCount - 1)}
          disabled={canNext}
        >
          {">>"}
        </Button>
      </SimpleGrid>
    </Flex>
  );
}
