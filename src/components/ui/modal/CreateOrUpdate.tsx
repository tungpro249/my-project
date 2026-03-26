"use client";

import React from "react";
import { Modal, Form, Button } from "antd";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  titleSubmit: string;
  titleCancel: string;
  children?: React.ReactNode;
  initialValues?: any;
  handleSubmitForm: (values: any) => void;
};

export default function CreateOrUpdate({
  open,
  onClose,
  title,
  titleSubmit,
  titleCancel,
  children,
  initialValues,
  handleSubmitForm,
}: Props) {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    handleSubmitForm(values);
    onClose();
  };

  return (
    <Modal
      title={title}
      open={open}
      onCancel={onClose}
      footer={null}
      destroyOnClose
    >
      <Form
        layout="vertical"
        form={form}
        onFinish={handleSubmit}
        initialValues={initialValues}
      >
        <div className="my-4">{children}</div>
        <Form.Item>
          <Button onClick={onClose} style={{ marginRight: 8 }}>
            {titleCancel}
          </Button>
          <Button type="primary" htmlType="submit">
            {titleSubmit}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
