"use client";
import GallaryCarousel from "@/app/components/carousel/GallaryCarousel";
import { Layout, Row, Col, Typography, Card, Button, Tag } from "antd";

const { Content } = Layout;
const { Title, Text } = Typography;

const hashTag = [
  { name: "Reactjs", color: "#1890ff" },
  { name: "Nextjs", color: "#1890ff" },
  { name: "Vuejs", color: "#1890ff" },
  { name: "TypeScript", color: "#1890ff" },
  { name: "Tailwind", color: "#1890ff" },
  { name: "Nodejs", color: "#1890ff" },
];

export function HomePage() {
  return (
    <Content style={{ padding: "20px 50px" }}>
      <Row gutter={32} justify="center">
        {/* Giới thiệu ngắn gọn */}
        <Col xs={24} sm={24} md={16}>
          <GallaryCarousel />

          <div className="mt-4">
            <Title level={4}>Bài viết nổi bật</Title>
            <Card
              title="Lập trình React cho người mới bắt đầu"
              style={{ marginBottom: "20px" }}
            >
              <Text>
                Hướng dẫn cơ bản cho những ai mới bắt đầu học React...
              </Text>
              <br />
              <Button type="link" href="/post/react-beginner">
                Đọc tiếp
              </Button>
            </Card>
            <Card
              title="Lập trình React cho người mới bắt đầu"
              style={{ marginBottom: "20px" }}
            >
              <Text>
                Hướng dẫn cơ bản cho những ai mới bắt đầu học React...
              </Text>
              <br />
              <Button type="link" href="/post/react-beginner">
                Đọc tiếp
              </Button>
            </Card>
          </div>
        </Col>

        {/* Các bài viết gần đây */}
        <Col xs={24} sm={24} md={8}>
          <Title level={4}>Bài viết gần đây</Title>
          <Card
            title="Lập trình React cho người mới bắt đầu"
            style={{ marginBottom: "20px" }}
          >
            <Text>Hướng dẫn cơ bản cho những ai mới bắt đầu học React...</Text>
            <br />
            <Button type="link" href="/post/react-beginner">
              Đọc tiếp
            </Button>
          </Card>
          <Title level={4}>Bài viết liên quan</Title>
          <Card
            title="Công nghệ Web 2025: Xu hướng và Thách thức"
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
          <Title level={4}>HashTag</Title>
          <Card className="w-full">
            <div className="gap-2">
              {hashTag.map((tag, index) => (
                <Tag key={index} color={tag.color} style={{ margin: "2px" }} className="cursor-pointer">
                  #{tag.name}
                </Tag>
              ))}
            </div>
          </Card>
        </Col>
      </Row>
    </Content>
  );
}
