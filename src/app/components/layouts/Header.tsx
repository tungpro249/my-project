"use client";
import React, { useEffect, useState } from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import { useRouter, usePathname } from "next/navigation";
import { useLoadingStore } from "@/app/stores/useLoadingStore";

const { Header, Content, Footer } = Layout;

const items = [
  {
    key: "1",
    label: "Trang chủ",
    path: "/",
  },
  {
    key: "2",
    label: "Blog",
    path: "/blog",
  },
  {
    key: "3",
    label: "Giới thiệu",
    path: "/portfolio",
  },
];

export function HeaderPage() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const { show, hide } = useLoadingStore();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMenuClick = (e: any) => {
    const selectedItem = items.find((item) => item.key === e.key);
    if (selectedItem && isMounted) {
      show();
      router.push(selectedItem.path);
    }
  };
  useEffect(() => {
    // Mỗi khi pathname thay đổi là route đã xong -> tắt loading
    hide();
  }, [pathname]);
  
  if (!isMounted) {
    return null;
  }

  const getBreadcrumbItems = () => {
    const paths = pathname.split("/").filter(Boolean); // Sử dụng pathname thay vì router.pathname
    return paths.map((segment, index) => {
      return (
        <Breadcrumb.Item key={index}>
          {segment.charAt(0).toUpperCase() + segment.slice(1)}
        </Breadcrumb.Item>
      );
    });
  };

  return (
    <>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" style={{ flex: 1 }} />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items}
          onClick={handleMenuClick} // Thêm onClick handler để điều hướng
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      {/* <Content style={{ padding: "0 48px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          {getBreadcrumbItems()}
        </Breadcrumb>
      </Content> */}
    </>
  );
}
