import { Table, Tag } from 'antd';
import type { User } from '../types/User';

interface UserListProps {
  users: User[];
}

export function UserList({ users }: UserListProps) {
  const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Idade',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Status',
      dataIndex: 'isActive',
      key: 'isActive',
      render: (isActive: boolean) =>
        isActive ? <Tag color="green">Ativo</Tag> : <Tag color="red">Inativo</Tag>,
    },
  ];

  return <Table dataSource={users} columns={columns} rowKey={(record) => record.name} />;
}
