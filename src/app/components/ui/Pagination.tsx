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

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <nav aria-label="Page navigation" className="flex justify-center mt-8">
      <AntdPagination
        current={currentPage}
        total={total}
        pageSize={pageSize}
        onChange={handlePageChange}
        showSizeChanger={false}
        responsive
      />
    </nav>
  );
}
