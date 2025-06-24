"use client";
import Image from "next/image";
import dayjs from "dayjs";
import { getBooks } from "@/app/api/book";
import { useState, useEffect } from "react";
import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Select,
  Space,
  Table,
  TablePaginationConfig,
  Tooltip,
} from "antd";
import { useRouter } from "next/navigation";
import { BookQueryType } from "@/app/type/book";
import Header from "@/components/Header/Header";

export default function Home() {
  const [dataSource, setDataSource] = useState([]);
  // fetch data when the page is loaded
  useEffect(() => {
    const fetchData = async () => {
      const res = await getBooks({
        current: 1,
        pageSize: pagination.pageSize,
      });
      console.log(res);
      setDataSource(res);
    };
    fetchData();
  }, []);
  const [form] = Form.useForm();
  const router = useRouter();
  // pagination
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 10,
    showSizeChanger: true,
    total: 0,
  });
  const handleSearch = async (values: BookQueryType) => {
    console.log("Searching...");
    const res = await getBooks({
      ...values,
      current: 1,
      pageSize: pagination.pageSize,
    });
    setDataSource(res.data);
    setPagination({
      current: 1,
      pageSize: pagination.pageSize,
      showSizeChanger: true,
      total: res.total,
    });
  };
  // handle Select category
  const handleSelect = (value: string) => {
    console.log(`selected ${value}`);
  };
  // handle Clearing the input form
  const handleClear = () => {
    form.resetFields();
  };

  // handle changes in pagination size(xx items per page)
  const handlePageChange = (pagination: TablePaginationConfig) => {
    console.log(pagination);
    setPagination(pagination as any);
    const query = form.getFieldsValue();
    getBooks({
      ...query,
      current: pagination.current,
      pageSize: pagination.pageSize,
    });
    console.log(query);
  };

  const COLUMNS = [
    {
      title: "用户名",
      dataIndex: "username",
      key: "username",
      width: 200,
    },
    {
      title: "性别",
      dataIndex: "gender",
      key: "gender",
      width: 120,
    },
    {
      title: "邮箱",
      dataIndex: "email",
      key: "email",
      width: 300,
    },
    {
      title: "角色",
      dataIndex: "role",
      key: "role",
      width: 80,
    },
  ];

  return (
    <>
      <Header value="用户管理" api="/user/add" buttonName="添加" />
      <Form
        name="search"
        form={form}
        onFinish={handleSearch}
        initialValues={{
          username: "",
          gender: "",
          email: "",
          role: "",
        }}
      >
        <Row gutter={24}>
          <Col span={5}>
            <Form.Item name="username" label="用户名">
              <Input placeholder="请输入用户名" allowClear />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item name="gender" label="性别">
              <Input placeholder="请输入性别" allowClear />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item name="role" label="角色">
              <Select
                showSearch
                allowClear
                onChange={handleSelect}
                options={[
                  { value: "管理员", label: "管理员" },
                  { value: "普通用户", label: "普通用户" },
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={9}>
            <Form.Item>
              <Space>
                <Button
                  htmlType="button"
                  className="mr-2"
                  onClick={handleClear}
                >
                  清空
                </Button>
                <Button type="primary" htmlType="submit">
                  筛选
                </Button>
              </Space>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <div className="overflow-auto" style={{ height: "calc(100% - 100px)" }}>
        <Table
          dataSource={dataSource}
          columns={COLUMNS}
          scroll={{ x: 1000 }}
          onChange={handlePageChange}
          pagination={{
            ...pagination,
            showTotal: () => `共 ${pagination.total} 条`,
          }}
        />
      </div>
    </>
  );
}
