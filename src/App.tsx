import { Card, Col, Layout, Row } from 'antd';
import { useState } from 'react';
import type { User } from './types/User';
import { UserForm } from './components/UserForm';
import { UserList } from './components/UserList';

const { Header, Content } = Layout;

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUsers([...users, user]);
  };

  return (
    <Layout>
      <Header style={{ color: 'white', fontSize: '20px' }}>Minha Lista de Usuários</Header>
      <Content style={{ padding: '20px' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={10}>
            <Card title="Novo Usuário">
              <UserForm onAddUser={addUser} />
            </Card>
          </Col>
          <Col xs={24} md={14}>
            <Card title="Usuários Cadastrados">
              <UserList users={users} />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
