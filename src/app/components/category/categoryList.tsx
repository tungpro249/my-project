"use client";

import React, { useEffect, useState } from "react";
import { Button, Form, Input, Table } from "antd";
import CreateOrUpdate from "../ui/modal/CreateOrUpdate";

interface Category {
  id: number;
  name: string;
}

export default function CategoryList() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);

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
      }, 1000);
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
    <>
      <div style={{ padding: 24 }}>
        <div className="flex justify-between mb-3">
          <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}>
            Danh sách danh mục
          </h2>
          <Button
            type="primary"
            onClick={() => {
              setOpen(true);
            }}
          >
            Thêm danh mục
          </Button>
        </div>
        <Table
          columns={columns}
          dataSource={categories}
          loading={loading}
          rowKey="id"
          bordered
        />
      </div>
      <CreateOrUpdate
        open={open}
        onClose={() => setOpen(false)}
        title="Thêm danh mục"
        titleSubmit="Thêm mới"
        titleCancel="Hủy"
        handleSubmitForm={(values: any) => {
          console.log("Add new category", values);
        }}
      >
        <Form.Item
          name="name"
          label="Tên danh mục"
          rules={[{ required: true, message: "Vui lòng nhập tên danh mục" }]}
        >
          <Input placeholder="Nhập tên danh mục" />
        </Form.Item>
      </CreateOrUpdate>
    </>
  );
}
