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
import AOS from "aos";
import "aos/dist/aos.css";

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
  useEffect(() => {
    AOS.init({
      duration: 1000, // Thời gian animation
      once: true, // Chỉ chạy một lần khi scroll
      mirror: false, // Không lặp lại khi scroll ngược
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <a
        href="/assets/Doan-Thanh-Tung-cv.pdf"
        download
        className="fixed bottom-10 right-6 z-50 bg-red-500 text-white px-6 py-4 rounded-full shadow-lg hover:bg-red-600 hover:scale-105 transition duration-300 transform"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Tải CV
      </a>
      <Content className="p-6 md:p-12 max-w-7xl mx-auto">
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={8} data-aos="zoom-in" data-aos-delay="100">
            <Avatar
              size={200}
              src="/assets/my-avatar.png"
              className="border-4 border-transparent group-hover:border-blue-500 group-hover:scale-105 transition duration-300 "
            />
            {/* <div className="absolute inset-0 rounded-full border-4 border-blue-300 opacity-0 group-hover:opacity-100 animate-pulse transition duration-300"></div> */}
          </Col>
          <Col xs={24} md={16}>
            <Title level={2} data-aos="fade-right" className="text-blue-700">
              Đoàn Thanh Tùng
            </Title>
            <Paragraph data-aos="fade-right" data-aos-delay="200">
              Tôi là một lập trình viên Frontend với 2 năm kinh nghiệm phát
              triển ứng dụng bằng React và 1 năm kinh nghiệm với Vue.js. Tôi
              thành thạo các thư viện giao diện như Ant Design, Material UI và
              Bootstrap, cùng với kiến thức vững chắc về HTML, CSS, JavaScript
              và TypeScript. Ngoài ra, tôi cũng có kinh nghiệm tối ưu hiệu suất
              web, responsive design và làm việc nhóm trong môi trường
              Agile/Scrum.
            </Paragraph>
            <Space size="middle" data-aos="fade-right" data-aos-delay="300">
              <Link href="https://github.com/tungpro249" target="_blank">
                <GithubOutlined className="text-2xl hover:text-blue-500 transition duration-300" />
              </Link>
              <Link href="mailto:tungt392@gmail.com">
                <MailOutlined className="text-2xl hover:text-blue-500 transition duration-300" />
              </Link>
              <Link
                href="https://linkedin.com/in/t%C3%B9ng-%C4%91o%C3%A0n-3b1292236"
                target="_blank"
              >
                <LinkedinOutlined className="text-2xl hover:text-blue-500 transition duration-300" />
              </Link>
            </Space>
          </Col>
        </Row>

        <div className="mt-12">
          <h2
            className="text-3xl font-bold mb-6 text-gray-800"
            data-aos="fade-up"
          >
            Kinh nghiệm làm việc
          </h2>
          <div className="mt-10" data-aos="fade-up" data-aos-delay="100">
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
            {[
              {
                company: "Công ty Cổ phần học viện Minh Trí Thành",
                duration: "01/2025 - Hiện tại",
                tasks: [
                  "Frontend Developer.",
                  "- Xây dựng các component tái sử dụng trong hệ thống.",
                  "- Tích hợp, làm việc với backend để kết nối API.",
                  "- Làm việc trao đổi với BA, design.",
                  "- Xây dựng landing page, responsive web.",
                ],
              },
              {
                company: "VDTSol",
                duration: "06/2023 - 12/2024",
                tasks: [
                  "Frontend Developer.",
                  "- Xây dựng các component tái sử dụng trong hệ thống.",
                  "- Tích hợp, làm việc với backend để kết nối API.",
                  "- Support các bạn intern trong team.",
                ],
              },
              {
                company: "Comit Corporation",
                duration: "04/2022 - 05/2023",
                tasks: [
                  "Thực tập sinh → Nhân viên chính thức.",
                  "- Học hỏi và hỗ trợ xây dựng các hệ thống nội bộ.",
                  "- Xây dựng các component tái sử dụng trong hệ thống.",
                  "- Tích hợp, làm việc với backend để kết nối API.",
                ],
              },
            ].map((exp, index) => (
              <div
                key={exp.company}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300"
                data-aos="fade-up"
                data-aos-delay={100 + index * 100}
              >
                <h3 className="text-xl font-semibold text-blue-600">
                  {exp.company}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
                <p className="text-gray-700">
                  <ul className="list-disc pl-5">
                    {exp.tasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-semibold mb-6" data-aos="fade-up">
            Kỹ năng
          </h2>
          <Row gutter={[16, 16]}>
            {skills.map((skill, index) => (
              <Col xs={12} md={8} key={skill.name}>
                <Card
                  className="hover:scale-105 hover:shadow-lg transition duration-300"
                  data-aos="zoom-in"
                  data-aos-delay={100 + index * 100}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{skill.icon}</span>
                    <span className="text-lg font-medium">{skill.name}</span>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-semibold mb-6" data-aos="fade-up">
            Dự án
          </h2>
          <Row gutter={[16, 16]} className="p-4">
            {[
              {
                title: "Hệ thống Chấm công AI timelog",
                description:
                  "Chấm công bằng nhận diện khuôn mặt sử dụng trí tuệ nhân tạo, giúp người lao động giảm tải tâm lý do ùn tắc, chấm công chậm và dễ dàng theo dõi.",
                tech: "Reactjs, Material-UI, Context, WebSocket, React Router DOM",
              },
              {
                title: "PN-Stack",
                description:
                  "Là một hệ thống ERP cung cấp giải pháp quản lý kho, nhân viên, kinh doanh, buôn bán và thống kê cho doanh nghiệp.",
                tech: "Reactjs, Ant Design, React Query",
              },
              {
                title: "ERP-SPACE",
                description:
                  "Là một hệ thống ERP cung cấp giải pháp quản lý kho, nhân viên, kinh doanh, buôn bán và thống kê cho doanh nghiệp.",
                tech: "Vue 3, Ant Design, Pinia",
              },
            ].map((project, index) => (
              <Col xs={24} md={12} key={project.title}>
                <div
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-[1.02] transition duration-300"
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 100}
                >
                  <Card
                    title={
                      <span className="text-lg font-semibold text-blue-700">
                        {project.title}
                      </span>
                    }
                    bordered={false}
                  >
                    <p className="text-gray-700 mb-2">
                      <strong className="text-gray-600">Mô tả:</strong>{" "}
                      {project.description}
                    </p>
                    <p className="text-sm text-gray-500">
                      <strong className="text-gray-600">Công nghệ:</strong>{" "}
                      {project.tech}
                    </p>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        <div className="mt-12">
          <h2
            className="text-3xl font-bold text-gray-800 mb-6"
            data-aos="fade-up"
          >
            Học vấn
          </h2>
          <div
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="text-gray-800 font-semibold">
              Đại học Công nghệ Giao thông Vận tải
            </p>
            <p className="text-gray-600">Chuyên ngành: Mạng máy tính</p>
            <p className="text-gray-600">Trình độ tiếng Anh: B1 (Trung cấp)</p>
          </div>
        </div>
      </Content>
    </div>
  );
}
