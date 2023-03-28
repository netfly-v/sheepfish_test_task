import {Table, TableProps} from 'antd';
import {ColumnsType} from 'antd/es/table';
import React from 'react';
import {Product} from '../../constants/types';
import {MiniImg} from './styles';

export const TableView: React.FC<{data: Product[]}> = ({data}) => {
  const dataWithKey = data.map((d, i) => ({...d, key: i.toString()}));
  const columns: ColumnsType<Product> = [
    {
      title: 'ID',
      dataIndex: 'id',
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: 'Name',
      dataIndex: 'title',
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: 'Photo',
      dataIndex: 'thumbnail',
      render: (image) => <MiniImg src={image} alt="product pic" />,
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      sorter: (a, b) => a.rating - b.rating,
    },
    {
      title: 'Qty in stock',
      dataIndex: 'stock',
      sorter: (a, b) => a.stock - b.stock,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      sorter: (a, b) => a.category.localeCompare(b.category),
    },
  ];

  const onChange: TableProps<Product>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  return <Table columns={columns} dataSource={dataWithKey} onChange={onChange} />;
};
