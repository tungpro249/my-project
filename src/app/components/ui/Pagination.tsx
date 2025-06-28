"use client";
import { Pagination as AntdPagination } from "antd";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  total: number;
  pageSize?: number;
}

export default function Pagination({ total, pageSize = 10 }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const currentPageSize = parseInt(
    searchParams.get("pageSize") || pageSize.toString(),
    10
  );

  const updateParams = (newParams: Record<string, string | number>) => {
    const params = new URLSearchParams(searchParams);
    Object.entries(newParams).forEach(([key, value]) => {
      params.set(key, String(value));
    });
    router.push(`?${params.toString()}`);
  };

  const handlePageChange = (page: number) => {
    updateParams({ page });
  };

  const handlePageSizeChange = (current: number, size: number) => {
    updateParams({ page: 1, limit: size });
  };

  return (
    <nav aria-label="Page navigation" className="flex mt-8">
      <AntdPagination
        current={currentPage}
        total={total}
        pageSize={currentPageSize}
        onChange={handlePageChange}
        onShowSizeChange={handlePageSizeChange}
        showSizeChanger
        showQuickJumper
        showTotal={(total) => `Tổng ${total} bản ghi`}
      />
    </nav>
  );
}
