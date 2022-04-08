import React from 'react';
import { Table as AntTable, Button } from 'antd';
import { DeleteOutlined, EditTwoTone } from '@ant-design/icons';

export interface Props {
  dataRepos: any;
  handleEdit: (param: any) => void;
  onDeleteClick: (param: any) => void;
}

function Table({ dataRepos, handleEdit, onDeleteClick }: Props) {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: '10%',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '15%',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      width: '30%',
    },
    {
      title: 'Watchers',
      dataIndex: 'watchers',
      key: 'watchers',
      width: '5%',
    },
    {
      title: 'Language',
      dataIndex: 'language',
      key: 'language',
      width: '10%',
    },
    {
      title: 'Open issues',
      dataIndex: 'open_issues',
      key: 'open_issues',
      width: '10%',
    },
    {
      title: 'Private',
      dataIndex: 'private',
      key: 'private',
      width: '10%',
      render: (text: any) => String(text),
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      width: '10%',
      render: (text: string, record: any) => (
        <span>
          <Button size="small" icon={<DeleteOutlined />} onClick={() => onDeleteClick(record)} danger />
          <Button size="small" icon={<EditTwoTone />} onClick={() => handleEdit(record)} />
        </span>
      ),
    },
  ];

  return (
    <AntTable
      dataSource={dataRepos}
      columns={columns}
      rowKey="id"
      className="ant-table-content"
      size="small"
      bordered
      pagination={{ defaultPageSize: 6, showSizeChanger: true, pageSizeOptions: ['4', '6', '8'] }}
    />
  );
}

export default Table;
