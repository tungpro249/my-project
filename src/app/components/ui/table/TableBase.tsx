// components/TableBase.jsx
import React from "react";
import { Table } from "antd";

/**
 * @param {Array} columns - Cấu hình cột của bảng (title, dataIndex, key, render...)
 * @param {Array} dataSource - Dữ liệu hiển thị trong bảng
 * @param {boolean} loading - Trạng thái loading
 * @param {Function} onChange - Sự kiện thay đổi phân trang, sort, filter
 * @param {Object} pagination - Cấu hình phân trang
 */
const TableBase = ({
  columns = [],
  dataSource = [],
  loading = false,
  onChange,
  pagination = {
    pageSize: 10,
    showSizeChanger: true,
    showQuickJumper: true,
  },
  rowKey = "id", // khóa duy nhất của mỗi dòng
  scroll = { x: "max-content" },
}) => {
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      onChange={onChange}
      pagination={pagination}
      rowKey={rowKey}
      scroll={scroll}
    />
  );
};

export default TableBase;
