import { Button, Form, Input, InputNumber, Switch } from 'antd';
import type { User } from '../types/User';

interface UserFormProps {
  onAddUser: (user: User) => void;
}

export function UserForm({ onAddUser }: UserFormProps) {
  const [form] = Form.useForm();

  const handleSubmit = (values: User) => {
    onAddUser(values);
    form.resetFields();
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item label="Nome" name="name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Idade" name="age" rules={[{ required: true, type: 'number', min: 0 }]}>
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item label="Ativo?" name="isActive" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Adicionar Usuário</Button>
      </Form.Item>
    </Form>
  );
}
