import React from "react";
import { Layout, Avatar, Typography, Row, Col, Card, Space } from "antd";
import {
  GithubOutlined,
  MailOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
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
    <Content style={{ padding: "24px" }}>
      <Row gutter={[32, 32]} align="middle">
        <Col xs={24} md={8}>
          <Avatar size={200} src="https://i.pravatar.cc/200" />
        </Col>
        <Col xs={24} md={16}>
          <Title level={2}>Đoàn Thanh Tùng</Title>
          <Paragraph>
            Tôi là một lập trình viên Frontend với 2 năm kinh nghiệm phát triển
            ứng dụng bằng React và 1 năm kinh nghiệm với Vue.js. Tôi thành thạo
            các thư viện giao diện như Ant Design, Material UI và Bootstrap,
            cùng với kiến thức vững chắc về HTML, CSS, JavaScript và TypeScript.
            Ngoài ra, tôi cũng có kinh nghiệm tối ưu hiệu suất web, responsive
            design và làm việc nhóm trong môi trường Agile/Scrum.
          </Paragraph>
          <Space size="middle">
            <Link href="https://github.com/tungpro249" target="_blank">
              <GithubOutlined style={{ fontSize: 24 }} />
            </Link>
            <Link href="mailto:tungt392@gmail.com">
              <MailOutlined style={{ fontSize: 24 }} />
            </Link>
            <Link href="https://linkedin.com/in/yourprofile" target="_blank">
              <LinkedinOutlined style={{ fontSize: 24 }} />
            </Link>
          </Space>
        </Col>
      </Row>

      <div style={{ marginTop: 40 }}>
        <Title level={3}>Kỹ năng</Title>
        <Row gutter={[16, 16]}>
          {skills.map((skill) => (
            <Col xs={12} md={8} key={skill.name}>
              <Card>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{skill.icon}</span>
                  <span >{skill.name}</span>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <div style={{ marginTop: 40 }}>
        <Title level={3}>Dự án</Title>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card title="Website bán hàng" bordered={false}>
              Xây dựng website bán hàng dùng React, Node.js và MongoDB.
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card title="Blog cá nhân" bordered={false}>
              Blog viết bằng Next.js + Tailwind CSS.
            </Card>
          </Col>
        </Row>
      </div>
    </Content>
  );
}
