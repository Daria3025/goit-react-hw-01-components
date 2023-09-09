import styled from 'styled-components';

export const TransactionTable = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  margin: 15px auto;
  width: 600px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const TableHead = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const TableEl = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #c696db;
  color: white;
  text-align: center;
`;