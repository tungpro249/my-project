"use client";

import React, { useEffect, useState } from "react";
import { Table } from "antd";

interface Category {
  id: number;
  name: string;
}

export default function CategoryList() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Giả lập fetch dữ liệu từ API
    const fetchCategories = async () => {
      const data: Category[] = [
        { id: 1, name: "Quần áo" },
        { id: 2, name: "Giày dép" },
        { id: 3, name: "Phụ kiện" },
      ];
      setTimeout(() => {
        setCategories(data);
        setLoading(false);
      }, 1000); // Delay giả lập
    };

    fetchCategories();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 100,
    },
    {
      title: "Tên danh mục",
      dataIndex: "name",
      key: "name",
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}>
        Danh sách danh mục
      </h2>
      <Table
        columns={columns}
        dataSource={categories}
        loading={loading}
        rowKey="id"
        bordered
      />
    </div>
  );
}
