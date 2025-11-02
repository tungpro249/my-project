"use client";
import { useRouter } from "next/navigation";
import { Input, Button } from "antd";
import { useEffect, useState, useCallback } from "react";
import CategorySelect from "../CategorySelect";

export default function SearchForm({
  defaultValue = "",
}: {
  defaultValue?: string;
}) {
  const router = useRouter();
  const [search, setSearch] = useState(defaultValue);
  const [categoryId, setCategoryId] = useState<number | undefined>(undefined);

  const handleSearch = useCallback(() => {
    let url = "/blog";
    const params: string[] = [];
    if (search) {
      params.push(`key_search=${encodeURIComponent(search)}`);
    }
    if (categoryId) {
      params.push(`category_id=${categoryId}`);
    }
    if (params.length > 0) {
      url += `?${params.join("&")}`;
    }
    router.push(url);
  }, [router, search, categoryId]);

  const handleChoseCategory = (value: number | undefined) => {
    setCategoryId(value);
  };

  useEffect(() => {
    if (!categoryId) return;
    handleSearch();
  }, [categoryId, handleSearch]);

  return (
    <div className="grid grid-cols-[250px_1fr_max-content] gap-4">
      <CategorySelect
        value={categoryId}
        onChange={(value) => handleChoseCategory(value)}
      />
      <Input
        placeholder="Tìm kiếm bài viết"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onPressEnter={handleSearch}
      />
      <Button type="primary" onClick={handleSearch}>
        Tìm kiếm
      </Button>
    </div>
  );
}
