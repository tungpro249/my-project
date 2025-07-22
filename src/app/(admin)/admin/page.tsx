import { TotalCard } from "@/app/components/admin/dashboard/TotalCard";

export default function AdminPage() {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {/* <TotalCard title="Tổng số người dùng" count={100} bgColor="bg-blue-500" textColor="text-white" /> */}
        <TotalCard title="Tổng số bài viết" count={100} bgColor="bg-green-500" textColor="text-white" />
        <TotalCard title="Tổng số danh mục" count={100} bgColor="bg-yellow-500" textColor="text-white" />
      </div>
    </>
  );
}
