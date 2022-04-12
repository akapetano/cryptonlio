import { Table, Thead, Tbody, Tr, Th, Td, chakra } from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { useTable, useSortBy, Column } from 'react-table';
import { CryptoData } from '../../../pages';

export type CryptoTableProps<Data extends object> = {
  data: CryptoData[];
  columns: Column<CryptoData>[];
};

export function CryptoTable<Data extends object>({
  data,
  columns,
}: CryptoTableProps<Data>) {
  console.log(data);
  console.log(columns);

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>COIN</Th>
          <Th>PRICE</Th>
          <Th>MARKET CAP</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((crypto) => (
          <Tr key={crypto.cryptoId}>
            <Td>{crypto.cryptoId}</Td>
            <Td>{crypto.cryptoName}</Td>
            <Td>{crypto.priceInUSD}</Td>
            <Td>{crypto.marketCap}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //   useTable({ columns, data }, useSortBy);

  // console.log(headerGroups);
  // console.log(rows);

  // return (
  //   <Table {...getTableProps()}>
  //     <Thead>
  //       {headerGroups.map((headerGroup) => (
  //         <Tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
  //           {headerGroup.headers.map((column) => (
  //             <Th
  //               {...column.getHeaderProps(column.getSortByToggleProps())}
  //               isNumeric={column.isNumeric}
  //               key={column.id}
  //             >
  //               {column.render('Header')}
  //               <chakra.span pl="4">
  //                 {column.isSorted ? (
  //                   column.isSortedDesc ? (
  //                     <TriangleDownIcon aria-label="sort descending" />
  //                   ) : (
  //                     <TriangleUpIcon aria-label="sorted ascending" />
  //                   )
  //                 ) : null}
  //               </chakra.span>
  //             </Th>
  //           ))}
  //         </Tr>
  //       ))}
  //     </Thead>
  //     <Tbody {...getTableBodyProps()}>
  //       {rows.map((row) => {
  //         prepareRow(row);
  //         return (
  //           <Tr {...row.getRowProps()} key={row.id}>
  //             {row.cells.map((cell) => (
  //               <Td
  //                 {...cell.getCellProps()}
  //                 isNumeric={cell.column.isNumeric}
  //                 key={cell.column.id}
  //               >
  //                 {cell.render('Cell')}
  //               </Td>
  //             ))}
  //           </Tr>
  //         );
  //       })}
  //     </Tbody>
  //   </Table>
  // );
}
