import { Flex, FlexProps } from '@chakra-ui/react';

export const TopTenCoinsSection = ({ ...restProps }: FlexProps) => {
  return (
    <section>
      <Flex
        py={[0, 10, 20]}
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        {...restProps}
      />
    </section>
  );
};
