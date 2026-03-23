"use client";

import { Select } from "antd";
import { useEffect, useState } from "react";
import { CATEGORIES_OPTIONS_ENDPOINT } from "@/app/services/categories/category.api";
import { CategoryType } from "@/app/services/categories/category.type";
import { api } from "@/app/services/api";

const { Option } = Select;

interface CategorySelectProps {
  value?: number;
  onChange?: (value: number) => void;
}

export default function CategorySelect({
  value,
  onChange,
}: CategorySelectProps) {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    api.get(CATEGORIES_OPTIONS_ENDPOINT)
      .then((response) => response.json())
      .then((data) => setCategories(data.data || []));
  }, []);

  return (
    <Select
      placeholder="Chọn danh mục"
      className="w-full"
      value={value}
      onChange={onChange}
      allowClear
    >
      {categories.map((category) => (
        <Option key={category.id} value={category.id}>
          {category.name}
        </Option>
      ))}
    </Select>
  );
}
