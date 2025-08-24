import { Row, Col, Space, Divider } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import Link from "next/link";

export function FooterPage() {
  return (
    <footer className="bg-white dark:bg-gray-900 py-12 px-6">
      <Row gutter={[24, 24]} justify="center">
        {/* Logo / Title */}
        <Col span={24} className="text-center">
          <div className="text-2xl font-bold text-gray-800 dark:text-white">
            Đoàn Thanh Tùng Blog
          </div>
        </Col>

        {/* Navigation Links */}
        <Col xs={24} sm={12} md={8} lg={6}>
          <div className="text-center">
            <h3 className="text-gray-800 dark:text-white text-lg font-semibold">
              Liên kết
            </h3>
            <Space direction="vertical" className="mt-4">
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                Trang chủ
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                Giới thiệu
              </Link>
              <Link
                href="/blog"
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                Bài viết
              </Link>
            </Space>
          </div>
        </Col>

        {/* Social Media */}
        <Col xs={24} sm={12} md={8} lg={6}>
          <div className="text-center">
            <h3 className="text-gray-800 dark:text-white text-lg font-semibold">
              Theo dõi tôi
            </h3>
            <Space size="large" className="mt-4">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <FacebookOutlined style={{ fontSize: "20px" }} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400">
                <TwitterOutlined style={{ fontSize: "20px" }} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400">
                <InstagramOutlined style={{ fontSize: "20px" }} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-400">
                <GithubOutlined style={{ fontSize: "20px" }} />
              </a>
            </Space>
          </div>
        </Col>

        {/* Email Subscription */}
        <Col xs={24} sm={12} md={8} lg={6}>
          <div className="text-center">
            <h3 className="text-gray-800 dark:text-white text-lg font-semibold">
              Nhận email thông báo
            </h3>
            <div className="mt-4 flex justify-center">
              <input
                type="email"
                placeholder="Nhập email"
                className="px-3 py-2 w-48 rounded-l-md focus:outline-none text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-800"
              />
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700 transition">
                Gửi
              </button>
            </div>
          </div>
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
