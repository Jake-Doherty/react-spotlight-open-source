import React from 'react';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.min.css';
import plants from '../../plants-data.js';

export default function Tables() {
  return (
    <>
      <Table height={400} width={1000} data={plants} cellBordered>
        <Column width={70} align="center" fixed sortable={true}>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={225} fixed>
          <HeaderCell>Common Name</HeaderCell>
          <Cell dataKey="common_name" />
        </Column>

        <Column width={200}>
          <HeaderCell>Plant Family</HeaderCell>
          <Cell dataKey="plant_family" />
        </Column>

        <Column flexGrow={1}>
          <HeaderCell>Scientific Name</HeaderCell>
          <Cell dataKey="plant_scientific_name" />
        </Column>
      </Table>
    </>
  );
}
