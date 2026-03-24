"use client";

import { Form, Input, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const SettingsForm = () => {
  const [form] = Form.useForm();

  const handleFinish = (values: any) => {
    console.log("🛠 Dữ liệu cài đặt:", values);
    message.success("Đã lưu cài đặt thành công!");
    // Gửi dữ liệu lên server tại đây (gọi API)
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 24 }}>
      <h2
        style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}
        className="text-gray-700"
      >
        Cài đặt hệ thống
      </h2>

      <Form layout="vertical" form={form} onFinish={handleFinish}>
        <Form.Item
          name="siteName"
          label="Tên trang"
          rules={[{ required: true, message: "Vui lòng nhập tên trang" }]}
        >
          <Input placeholder="Ví dụ: Blog công nghệ Tùng Dev" />
        </Form.Item>

        <Form.Item name="siteDescription" label="Mô tả trang">
          <Input.TextArea
            placeholder="Giới thiệu ngắn về trang blog của bạn..."
            rows={4}
          />
        </Form.Item>

        <Form.Item name="logo" label="Logo">
          <Upload
            name="logo"
            listType="picture"
            maxCount={1}
            beforeUpload={() => false}
          >
            <Button icon={<UploadOutlined />}>Tải lên logo</Button>
          </Upload>
        </Form.Item>

        <Form.Item name="facebook" label="Liên kết Facebook">
          <Input placeholder="https://facebook.com/yourpage" />
        </Form.Item>

        <Form.Item
          name="contactEmail"
          label="Email liên hệ"
          rules={[{ type: "email", message: "Email không hợp lệ" }]}
        >
          <Input placeholder="example@gmail.com" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Lưu cài đặt
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SettingsForm;
