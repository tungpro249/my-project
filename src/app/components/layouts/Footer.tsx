"use client";
import { Layout, Row, Col, Typography, Space, Divider } from "antd";
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, GithubOutlined } from "@ant-design/icons";

const { Footer } = Layout;
const { Text } = Typography;

export function FooterPage() {
  return (
    <Footer className="!bg-[#001529] text-white p-[30px 50px]">
      <Row gutter={16}>
        {/* Logo or Text */}
        <Col span={24} style={{ textAlign: "center", marginBottom: "20px" }}>
          <Text className="!text-white text-2xl font-bold">Đoàn Thanh Tùng Blog</Text>
        </Col>

        {/* Navigation Links */}
        <Col xs={24} sm={12} md={8} lg={6}>
          <div style={{ textAlign: "center" }}>
            <Text strong className="!text-white" style={{ fontSize: "16px" }}>Liên kết</Text>
            <div style={{ marginTop: "10px" }}>
              <Space direction="vertical">
                <Text style={{ color: "#ccc" }}>Trang chủ</Text>
                <Text style={{ color: "#ccc" }}>Giới thiệu</Text>
                <Text style={{ color: "#ccc" }}>Bài viết</Text>
                <Text style={{ color: "#ccc" }}>Liên hệ</Text>
              </Space>
            </div>
          </div>
        </Col>

        {/* Social Media Icons */}
        <Col xs={24} sm={12} md={8} lg={6}>
          <div style={{ textAlign: "center" }}>
            <Text strong style={{ fontSize: "16px" }}>Theo dõi tôi</Text>
            <div style={{ marginTop: "10px" }}>
              <Space size="large">
                <FacebookOutlined style={{ fontSize: "20px", color: "white" }} />
                <TwitterOutlined style={{ fontSize: "20px", color: "white" }} />
                <InstagramOutlined style={{ fontSize: "20px", color: "white" }} />
                <GithubOutlined style={{ fontSize: "20px", color: "white" }} />
              </Space>
            </div>
          </div>
        </Col>

        {/* Copyright */}
        <Col span={24} style={{ textAlign: "center", marginTop: "30px" }}>
          <Divider style={{ borderColor: "#444" }} />
          <Text style={{ color: "#ccc" }}>
            © 2025 Đoàn Thanh Tùng. All rights reserved.
          </Text>
        </Col>
      </Row>
    </Footer>
  );
}
