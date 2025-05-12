"use client";
import { Layout, Row, Col, Typography, Card, Button, Space } from "antd";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

export function HomePage() {
  return (
    <Content style={{ padding: "20px 50px" }}>
      <Row gutter={32} justify="center">
        {/* Giới thiệu ngắn gọn */}
        <Col xs={24} sm={24} md={16}>
          <Card
            style={{ marginBottom: "30px" }}
            title="Chào mừng đến với blog của Đoàn Thanh Tùng"
            bordered={false}
          >
            <Text style={{ fontSize: "18px" }}>
              Đây là nơi tôi chia sẻ những bài viết về công nghệ, lập trình và
              các kinh nghiệm trong công việc. Bạn có thể tìm thấy các bài viết
              thú vị, thông tin hữu ích, và những bài học kinh nghiệm trong suốt
              hành trình của tôi.
            </Text>
          </Card>
        </Col>

        {/* Các bài viết gần đây */}
        <Col xs={24} sm={24} md={8}>
          <Title level={4}>Bài viết gần đây</Title>
          <Card
            title="Lập trình React cho người mới bắt đầu"
            bordered={false}
            style={{ marginBottom: "20px" }}
          >
            <Text>Hướng dẫn cơ bản cho những ai mới bắt đầu học React...</Text>
            <br />
            <Button type="link" href="/post/react-beginner">
              Đọc tiếp
            </Button>
          </Card>
          <Card
            title="Công nghệ Web 2025: Xu hướng và Thách thức"
            bordered={false}
            style={{ marginBottom: "20px" }}
          >
            <Text>
              Các công nghệ mới nổi trong năm 2025 và cách chúng sẽ thay đổi
              cách chúng ta làm việc...
            </Text>
            <br />
            <Button type="link" href="/post/web-tech-2025">
              Đọc tiếp
            </Button>
          </Card>
        </Col>
      </Row>
    </Content>
  );
}
