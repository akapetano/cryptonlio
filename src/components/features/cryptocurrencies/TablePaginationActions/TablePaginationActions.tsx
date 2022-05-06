import { HStack, IconButton, Text, useColorModeValue } from '@chakra-ui/react';
import {
  BiFirstPage,
  BiLastPage,
  BiChevronLeft,
  BiChevronRight,
} from 'react-icons/bi';

interface ITablePaginationActionsProps {
  count: number;
  page: number;
  onPageChange: (
    e: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
  rowsPerPage: number;
}

export const TablePaginationActions = ({
  count,
  page,
  onPageChange,
  rowsPerPage,
}: ITablePaginationActionsProps) => {
  const paginationColor = useColorModeValue('brand.200', 'brand.100');

  const onFirstPageClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, 0);
  };

  const onBackButtonPageClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const onNextButtonPageClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const onLastButtonPageClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <HStack spacing="3rem">
      <Text
        fontSize={{ base: 'md', md: 'lg' }}
        color={paginationColor}
        p="0.4rem 0.8rem"
      >
        {page === 0 ? rowsPerPage - (rowsPerPage - 1) : rowsPerPage * page + 1}-
        {page === 0 ? rowsPerPage : rowsPerPage * (page + 1)} / {count}
      </Text>
      <HStack spacing="1rem">
        <IconButton
          icon={<BiFirstPage />}
          width={10}
          height={10}
          border="none"
          variant="secondary"
          disabled={page === 0}
          aria-label="first page"
          fontSize="24px"
          cursor="pointer"
          onClick={onFirstPageClick}
        />
        <IconButton
          icon={<BiChevronLeft />}
          width={10}
          height={10}
          border="none"
          variant="secondary"
          disabled={page === 0}
          aria-label="previous page"
          fontSize="24px"
          cursor="pointer"
          onClick={onBackButtonPageClick}
        />
        <IconButton
          icon={<BiChevronRight />}
          width={10}
          height={10}
          border="none"
          variant="secondary"
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
          fontSize="24px"
          cursor="pointer"
          onClick={onNextButtonPageClick}
        />
        <IconButton
          icon={<BiLastPage />}
          width={10}
          height={10}
          border="none"
          variant="secondary"
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
          fontSize="24px"
          cursor="pointer"
          onClick={onLastButtonPageClick}
        />
      </HStack>
    </HStack>
  );
};
