"use client";
import { Layout, Row, Col, Typography, Card, Button, Space } from "antd";
import Link from "next/link";

const { Content } = Layout;
const { Title, Text } = Typography;
export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Lập trình React cho người mới bắt đầu",
      description:
        "Hướng dẫn cơ bản cho những ai mới bắt đầu học React. Bài viết này sẽ giúp bạn làm quen với các khái niệm cơ bản của React...",
      link: "/post/react-beginner",
    },
    {
      id: 2,
      title: "Công nghệ Web 2025: Xu hướng và Thách thức",
      description:
        "Các công nghệ mới nổi trong năm 2025 và cách chúng sẽ thay đổi cách chúng ta làm việc, học hỏi và phát triển ứng dụng web...",
      link: "/post/web-tech-2025",
    },
    {
      id: 3,
      title: "Làm quen với Vue.js cho người mới bắt đầu",
      description:
        "Vue.js là một trong những framework phổ biến trong cộng đồng JavaScript. Bài viết này sẽ giúp bạn bắt đầu với Vue.js một cách dễ dàng...",
      link: "/post/vuejs-beginner",
    },
    // Thêm các bài viết khác ở đây
  ];
  return (
    <div>
      <Row gutter={32} justify="center">
        {/* Tiêu đề trang */}
        <Col xs={24} style={{ textAlign: "center", marginBottom: "40px" }}>
          <Title level={2}>Danh sách Bài Viết</Title>
        </Col>

        {/* Danh sách bài viết */}
        {blogPosts.map((post) => (
          <Col
            xs={24}
            sm={12}
            md={8}
            key={post.id}
            style={{ marginBottom: "30px" }}
          >
            <Card
              hoverable
              title={post.title}
              bordered={false}
              style={{ height: "100%" }}
            >
              <Text>{post.description}</Text>
              <div style={{ marginTop: "20px", textAlign: "right" }}>
                <Button type="primary">
                  <Link href={post.link}>Đọc tiếp</Link>
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
