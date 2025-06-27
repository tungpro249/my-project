"use client";
import { useRouter } from "next/navigation";
import { Input, Button } from "antd";
import { useState } from "react";

export default function SearchForm({
  defaultValue = "",
}: {
  defaultValue?: string;
}) {
  const router = useRouter();
  const [search, setSearch] = useState(defaultValue);

  const handleSearch = () => {
    router.push(`/blog?key_search=${encodeURIComponent(search)}`);
  };

  return (
    <div className="flex gap-2">
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
