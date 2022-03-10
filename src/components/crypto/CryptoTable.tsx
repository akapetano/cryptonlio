import { Table, Thead, Tbody, Tr, Th, Td, chakra } from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';

const DUMMY_DATA: {
  cryptoName: string;
  priceInUSD: number;
  marketCap: number;
}[] = [
  {
    cryptoName: 'Bitcoin',
    priceInUSD: 39297.43,
    marketCap: 743927748657,
  },
  {
    cryptoName: 'Ethereum',
    priceInUSD: 2604.5,
    marketCap: 311603507595,
  },
  {
    cryptoName: 'BNB',
    priceInUSD: 377.58,
    marketCap: 63389911412,
  },
  {
    cryptoName: 'XRP',
    priceInUSD: 0.734506,
    marketCap: 3510309186,
  },
  {
    cryptoName: 'Terra',
    priceInUSD: 97.2,
    marketCap: 34663679968,
  },
  {
    cryptoName: 'Solana',
    priceInUSD: 82.84,
    marketCap: 26694367656,
  },
  {
    cryptoName: 'Cardano',
    priceInUSD: 0.80927,
    marketCap: 25926918976,
  },
  {
    cryptoName: 'Avalanche',
    priceInUSD: 73.37,
    marketCap: 19438799990,
  },
  {
    cryptoName: 'Polkadot',
    priceInUSD: 17.04,
    marketCap: 18545718814,
  },
  {
    cryptoName: 'Dogecoin',
    priceInUSD: 0.116835,
    marketCap: 15448543380,
  },
];

const columns = [
  {
    Header: 'COIN',
    accessor: 'cryptocurrencyName',
  },
  {
    Header: 'PRICE',
    accessor: 'cryptocurrencyPrice',
  },
  {
    Header: 'MARKET CAP',
    accessor: 'cryptocurrencyMarketCap',
    isNumeric: true,
  },
];

export function CryptoTable() {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, DUMMY_DATA }, useSortBy);

  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup) => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                isNumeric={column.isNumeric}
                key={}
              >
                {column.render('Header')}
                <chakra.span pl="4">
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <TriangleDownIcon aria-label="sort descending" />
                    ) : (
                      <TriangleUpIcon aria-label="sorted ascending" />
                    )
                  ) : null}
                </chakra.span>
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <Tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <Td {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
                  {cell.render('Cell')}
                </Td>
              ))}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
}
