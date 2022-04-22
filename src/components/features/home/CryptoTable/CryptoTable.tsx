import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { CryptoData } from '../../../../../types/crypto';

interface ICryptoTableProps {
  data: CryptoData[];
}

export const CryptoTable = ({ data }: ICryptoTableProps) => {
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
};
