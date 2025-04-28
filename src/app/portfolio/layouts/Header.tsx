"use client";
import { Layout,  Typography} from 'antd';

const { Header } = Layout;
const { Title } = Typography;
export function HeaderPage() {
  return (
    <Header style={{ background: "#001529", padding: "0 24px" }}>
      <Title
        level={3}
        style={{ color: "white", lineHeight: "64px", margin: 0 }}
      >
        My Portfolio
      </Title>
    </Header>
  );
}
