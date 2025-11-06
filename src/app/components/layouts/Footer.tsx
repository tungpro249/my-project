import { Row, Col, Space, Divider } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { NotifyEmail } from "../ui/NotifyEmail";
import DmcaBadge from "../DmcaBadge";

export function FooterPage() {
  return (
    <footer className="bg-white text-gray-800 dark:bg-[#0f172a] dark:text-gray-200 transition-colors duration-300 py-12 px-6">
      <Row gutter={[24, 24]} justify="center">
        {/* Logo / Title */}
        <Col span={24} className="text-center">
          <div className="text-[36px] font-bold">Đoàn Thanh Tùng Blog</div>
        </Col>

        {/* Navigation Links */}
        <Col xs={24} sm={12} md={8} lg={6}>
          <div className="text-center">
            <h3 className="text-xl font-semibold">Liên kết</h3>
            <Space direction="vertical" className="mt-4">
              <Link
                href="/"
                className="text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/store"
                className="text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Store
              </Link>
            </Space>
          </div>
        </Col>

        {/* Social Media */}
        <Col xs={24} sm={12} md={8} lg={6}>
          <div className="text-center">
            <h3 className="text-xl font-semibold">Follow me</h3>
            <Space size="large" className="mt-4">
              <Link
                href="https://www.facebook.com/oanthanhtung.713556"
                className="text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FacebookOutlined style={{ fontSize: "20px" }} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/t%C3%B9ng-%C4%91o%C3%A0n-3b1292236/"
                className="text-gray-800 dark:text-gray-100 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
              >
                <InstagramOutlined style={{ fontSize: "20px" }} />
              </Link>
              <Link
                href="https://github.com/tungpro249"
                className="text-gray-800 dark:text-gray-100 hover:text-gray-900 dark:hover:text-gray-400 transition-colors"
              >
                <GithubOutlined style={{ fontSize: "20px" }} />
              </Link>
            </Space>
          </div>
        </Col>

        {/* Email Subscription */}
        <Col xs={24} sm={12} md={8} lg={6}>
          <NotifyEmail />
          <div className="mt-4"></div>
          <DmcaBadge />
        </Col>

        {/* Copyright */}
        <Col span={24} className="text-center mt-8">
          <Divider className="border-gray-200 dark:border-gray-700" />
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © 2025 Đoàn Thanh Tùng. All rights reserved.
          </p>
        </Col>
      </Row>
    </footer>
  );
}
