import { ReactNode } from "react";

interface TotalCardProps {
  title: string;
  count: number;
  bgColor?: string; // ví dụ: "bg-blue-100"
  textColor?: string; // ví dụ: "text-blue-800"
  icon?: ReactNode;
}

export const TotalCard = ({
  title,
  count,
  bgColor = "bg-white",
  textColor = "text-gray-800",
  icon,
}: TotalCardProps) => {
  return (
    <div
      className={`p-6 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 ${bgColor} ${textColor} flex items-center justify-between`}
    >
      <div>
        <p className="text-lg font-medium opacity-80">{title}</p>
        <p className="text-4xl font-bold mt-2">{count}</p>
      </div>
      {icon && <div className="text-5xl opacity-30">{icon}</div>}
    </div>
  );
};
