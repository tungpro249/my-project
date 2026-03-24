"use client";

import React, { useEffect, useState } from "react";
import { Button, Form, Input, Table, message } from "antd";
import CreateOrUpdate from "@/app/components/ui/modal/CreateOrUpdate";
import { api } from "@/app/services/api";
import {
  CATEGORIES_ENDPOINT,
  CATEGORIES_OPTIONS_ENDPOINT,
} from "@/app/services/categories/category.api";

interface Category {
  id: number;
  name: string;
}

export default function CategoryList() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  // Load categories
  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await api.get(CATEGORIES_OPTIONS_ENDPOINT);
      const data = await response.json();
      setCategories(data.data || []);
    } catch (error) {
      message.error("Không thể tải danh mục");
      console.log("Failed to fetch categories:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Create
  const handleCreate = async (data: any) => {
    try {
      const res = await api.post(CATEGORIES_ENDPOINT, data);
      if (res.ok) {
        message.success("Thêm danh mục thành công");
        fetchCategories();
      } else {
        message.error("Thêm danh mục thất bại");
      }
    } catch (error) {
      message.error("Lỗi khi thêm danh mục");
      console.log("Failed to create category:", error);
    }
    setOpen(false);
  };

  // Update
  const handleUpdate = async (data: any) => {
    try {
      const res = await api.put(`${CATEGORIES_ENDPOINT}/${data.id}`, {
        name: data.name,
      });
      if (res.ok) {
        message.success("Cập nhật thành công");
        fetchCategories();
      } else {
        message.error("Cập nhật thất bại");
      }
    } catch (error) {
      message.error("Lỗi khi cập nhật");
      console.log("Failed to update category:", error);
    }
    setOpen(false);
    setEditingCategory(null);
  };

  // Delete
  const handleDelete = async (id: number) => {
    try {
      const res = await api.delete(`${CATEGORIES_ENDPOINT}/${id}`);
      if (res.ok) {
        message.success("Xóa danh mục thành công");
        fetchCategories();
      } else {
        message.error("Xóa danh mục thất bại");
      }
    } catch (error) {
      message.error("Lỗi khi xóa danh mục");
      console.log("Failed to delete category:", error);
    }
  };

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
    {
      title: "Hành động",
      key: "action",
      render: (_: any, record: Category) => (
        <div className="flex gap-2">
          <Button
            type="primary"
            onClick={() => {
              setEditingCategory(record);
              setOpen(true);
            }}
          >
            Sửa
          </Button>
          <Button type="primary" danger onClick={() => handleDelete(record.id)}>
            Xóa
          </Button>
        </div>
      ),
    },
  ];

  return (
    <>
      <div style={{ padding: 24 }}>
        <div className="flex justify-between mb-3">
          <h2
            style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}
            className="text-gray-700"
          >
            Danh sách danh mục
          </h2>
          <Button
            type="primary"
            onClick={() => {
              setEditingCategory(null);
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
        onClose={() => {
          setOpen(false);
          setEditingCategory(null);
        }}
        title={editingCategory ? "Cập nhật danh mục" : "Thêm danh mục"}
        titleSubmit={editingCategory ? "Cập nhật" : "Thêm mới"}
        titleCancel="Hủy"
        initialValues={editingCategory || undefined}
        handleSubmitForm={(values: any) => {
          if (editingCategory) {
            handleUpdate({ ...editingCategory, ...values });
          } else {
            handleCreate(values);
          }
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
