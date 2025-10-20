"use client";

import { Select } from "antd";
import { useEffect, useState } from "react";
import { GET_LIST_CATEGORY } from "@/app/services/categories/category.api";
import { CategoryType } from "@/app/services/categories/category.type";

const { Option } = Select;

interface CategorySelectProps {
  value?: string;
  onChange?: (value: string | number) => void;
}

export default function CategorySelect({
  value,
  onChange,
}: CategorySelectProps) {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    fetch(GET_LIST_CATEGORY)
      .then((response) => response.json())
      .then((data) => setCategories(data.data || []));
  }, []);

  return (
    <Select
      placeholder="Chọn danh mục"
      className="w-full"
      value={Number(value)}
      onChange={onChange}
    >
      {categories.map((category) => (
        <Option key={category.id} value={category.id}>
          {category.name}
        </Option>
      ))}
    </Select>
  );
}
