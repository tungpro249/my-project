"use client";
import React, { useEffect } from "react";
import { Layout, Avatar, Typography, Row, Col, Card, Space } from "antd";
import {
  GithubOutlined,
  MailOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Timeline } from "antd";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaVuejs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";

const { Content } = Layout;
const { Title, Paragraph, Link } = Typography;
const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <RiNextjsFill /> },
  { name: "Vue", icon: <FaVuejs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
  { name: "Node.js", icon: <FaNodeJs /> },
];
export default function Portfolio() {
  return (
    <>
      <a
        href={"/assets/Doan-Thanh-Tung-cv.pdf"}
        download
        className="fixed bottom-10 right-6 z-100 !bg-red-400 !text-white px-6 py-4 rounded-full shadow-lg !hover:bg-red-500 transition duration-300"
      >
        Tải CV
      </a>
      <Content className="p-[24px]">
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={8}>
            <Avatar size={200} src="/assets/my-avatar.png" />
          </Col>
          <Col xs={24} md={16}>
            <Title level={2}>Đoàn Thanh Tùng</Title>
            <Paragraph>
              Tôi là một lập trình viên Frontend với 2 năm kinh nghiệm phát
              triển ứng dụng bằng React và 1 năm kinh nghiệm với Vue.js. Tôi
              thành thạo các thư viện giao diện như Ant Design, Material UI và
              Bootstrap, cùng với kiến thức vững chắc về HTML, CSS, JavaScript
              và TypeScript. Ngoài ra, tôi cũng có kinh nghiệm tối ưu hiệu suất
              web, responsive design và làm việc nhóm trong môi trường
              Agile/Scrum.
            </Paragraph>
            <Space size="middle">
              <Link href="https://github.com/tungpro249" target="_blank">
                <GithubOutlined style={{ fontSize: 24 }} />
              </Link>
              <Link href="mailto:tungt392@gmail.com">
                <MailOutlined style={{ fontSize: 24 }} />
              </Link>
              <Link
                href="https://linkedin.com/in/https://www.linkedin.com/in/t%C3%B9ng-%C4%91o%C3%A0n-3b1292236/"
                target="_blank"
              >
                <LinkedinOutlined style={{ fontSize: 24 }} />
              </Link>
            </Space>
          </Col>
        </Row>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Kinh nghiệm làm việc
          </h2>
          <div className="mt-[40px]">
            <Timeline
              mode="left"
              items={[
                {
                  label: (
                    <span className="text-gray-500 font-medium">
                      2022-04-01
                    </span>
                  ),
                  children: (
                    <p className="text-blue-600 font-semibold">
                      Thực tập tại Comit
                    </p>
                  ),
                },
                {
                  label: (
                    <span className="text-gray-500 font-medium">
                      2022-09-01
                    </span>
                  ),
                  children: (
                    <p className="text-blue-600 font-semibold">
                      Trở thành nhân viên chính thức
                    </p>
                  ),
                },
                {
                  children: (
                    <p className="text-blue-600 font-semibold">
                      Frontend Developer
                    </p>
                  ),
                },
                {
                  label: (
                    <span className="text-gray-500 font-medium">
                      01-06-2024
                    </span>
                  ),
                  children: (
                    <p className="text-blue-600 font-semibold">VDTSol</p>
                  ),
                },
                {
                  label: (
                    <span className="text-gray-500 font-medium">
                      01-01-2025
                    </span>
                  ),
                  children: (
                    <p className="text-blue-600 font-semibold">
                      Công ty cổ phần học viện Minh Trí Thành
                    </p>
                  ),
                },
              ]}
            />
          </div>
          <div className="space-y-6">
            <div className="p-5 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-600">
                Công ty Cổ phần học viện Minh Trí Thành
              </h3>
              <p className="text-sm text-gray-500 mb-1">01/2025 - Hiện tại</p>
              <p className="text-gray-700">
                <ul>
                  <li>Frontend Developer.</li>
                  <li>- Xây dựng các component tái sử dụng trong hệ thống.</li>
                  <li>- Tích hợp, làm việc với backend để kết nối API.</li>
                  <li>- Làm việc trao đổi với BA, design.</li>
                  <li>- Xây dựng landing page, responsive web.</li>
                </ul>
              </p>
            </div>

            <div className="p-5 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-600">VDTSol</h3>
              <p className="text-sm text-gray-500 mb-1">06/2023 - 12/2024</p>
              <p className="text-gray-700">
                <ul>
                  <li>Frontend Developer.</li>
                  <li>- Xây dựng các component tái sử dụng trong hệ thống.</li>
                  <li>- Tích hợp, làm việc với backend để kết nối API.</li>
                  <li>- Support các bạn intern trong team.</li>
                </ul>
              </p>
            </div>

            <div className="p-5 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-600">
                Comit Corporation
              </h3>
              <p className="text-sm text-gray-500 mb-1">04/2022 - 05/2023</p>
              <p className="text-gray-700">
                <ul>
                  <li>Thực tập sinh → Nhân viên chính thức.</li>
                  <li>- Học hỏi và hỗ trợ xây dựng các hệ thống nội bộ.</li>
                  <li>- Xây dựng các component tái sử dụng trong hệ thống.</li>
                  <li>- Tích hợp, làm việc với backend để kết nối API.</li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 40 }}>
          <Title level={3}>Kỹ năng</Title>
          <Row gutter={[16, 16]}>
            {skills.map((skill) => (
              <Col xs={12} md={8} key={skill.name}>
                <Card>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <div>
          <Title level={3}>Dự án</Title>
          <Row gutter={[16, 16]} className="p-4">
            <Col xs={24} md={12}>
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
                <Card
                  title={
                    <span className="text-lg font-semibold text-blue-700">
                      Hệ thống Chấm công AI timelog
                    </span>
                  }
                  bordered={false}
                >
                  <p className="text-gray-700 mb-2">
                    <strong className="text-gray-600">Mô tả:</strong> Chấm công
                    bằng nhận diện khuôn mặt sử dụng trí tuệ nhân tạo, giúp
                    người lao động giảm tải tâm lý do ùn tắc, chấm công chậm và
                    dễ dàng theo dõi.
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong className="text-gray-600">Công nghệ:</strong>{" "}
                    Reactjs, Material-UI, Context, WebSocket, React Router DOM
                  </p>
                </Card>
              </div>
            </Col>

            <Col xs={24} md={12}>
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
                <Card
                  title={
                    <span className="text-lg font-semibold text-blue-700">
                      PN-Stack
                    </span>
                  }
                  bordered={false}
                >
                  <p className="text-gray-700 mb-2">
                    <strong className="text-gray-600">Mô tả:</strong> Là một hệ
                    thống ERP cung cấp giải pháp quản lý kho, nhân viên, kinh
                    doanh, buôn bán và thống kê cho doanh nghiệp.
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong className="text-gray-600">Công nghệ:</strong>{" "}
                    Reactjs, Ant Design, React Query
                  </p>
                </Card>
              </div>
            </Col>

            <Col xs={24} md={12}>
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
                <Card
                  title={
                    <span className="text-lg font-semibold text-blue-700">
                      ERP-SPACE
                    </span>
                  }
                  bordered={false}
                >
                  <p className="text-gray-700 mb-2">
                    <strong className="text-gray-600">Mô tả:</strong> Là một hệ
                    thống ERP cung cấp giải pháp quản lý kho, nhân viên, kinh
                    doanh, buôn bán và thống kê cho doanh nghiệp.
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong className="text-gray-600">Công nghệ:</strong> Vue 3,
                    Ant Design, Pinia
                  </p>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Học vấn</h2>
          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-gray-800 font-semibold">
              Đại học Công nghệ Giao thông Vận tải
            </p>
            <p className="text-gray-600">Chuyên ngành: Mạng máy tính</p>
            <p className="text-gray-600">Trình độ tiếng Anh: B1 (Trung cấp)</p>
          </div>
        </div>
      </Content>
    </>
  );
}
