import React from 'react';
import { Table } from '@mui/material';
import { Label, LabelGroup } from '@primer/components';
import { DataTable } from '@primer/react/drafts';
import TimeAgo from 'react-timeago';

// this file is just a demo to try and use the DataTable component
// https://primer.style/design/components/data-table/react#examples

const App = () => {

  const data = [
    {
      name: 'Repository 1',
      type: 'Type 1',
      updatedAt: '2023-05-25T12:00:00Z',
      features: {
        row2: ['feature1', 'feature2'],
        row3: [],
      },
    },
    {
      name: 'Repository 12',
      type: 'Type 13',
      updatedAt: '2022-05-25T12:00:00Z',
      features: {
        row2: ['feature44', 'feature2'],
        row3: [`feature0`],
      },
    },
    // Add more data objects as needed
  ];

  return (
  <Table.Container>
    <Table.Title as="h2" id="repositories">
      Repositories
    </Table.Title>
    <Table.Subtitle as="p" id="repositories-subtitle">
      A subtitle could appear here to give extra context to the data.
    </Table.Subtitle>
    <DataTable
      aria-labelledby="repositories"
      aria-describedby="repositories-subtitle"
      data={data}
      columns={[
        {
          header: 'Contract',
          field: 'name',
          rowHeader: true,
        },
        {
          header: 'Type',
          field: 'type',
          renderCell: (row) => {
            return <Label>{(row.type).toUpperCase()}</Label>
          },
        },
        {
          header: 'Updated',
          field: 'updatedAt',
          renderCell: (row) => {
            return <TimeAgo date={new Date(row.updatedAt)} />
          },
        },
        {
          header: 'Row2',
          field: 'features.row2',
          renderCell: (row) => {
            return row.features.row2.length > 0 ? (
              <LabelGroup>
                {row.features.row2.map((feature) => {
                  return <Label key={feature}>{(feature).toUpperCase()}</Label>
                })}
              </LabelGroup>
            ) : null
          },
        },
        {
          header: 'Row3',
          field: 'features.row3',
          renderCell: (row) => {
            return row.features.row3.length > 0 ? (
              <LabelGroup>
                {row.features.row3.map((feature) => {
                  return <Label key={feature}>{(feature).toUpperCase()}</Label>
                })}
              </LabelGroup>
            ) : null
          },
        },
      ]}
    />
  </Table.Container>
)
    };

export default App;
