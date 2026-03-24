import { TotalCard } from "@/app/(admin)/admin/dashboard/components/TotalCard";

export default function AdminPage() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <TotalCard title="Tổng số người dùng" count={100} />
      <TotalCard title="Tổng số bài viết" count={100} />
      <TotalCard title="Tổng số danh mục" count={100} />
    </div>
  );
}
