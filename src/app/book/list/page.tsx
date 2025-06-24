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

  const handleEdit = () => {
    router.push("/book/edit/id");
  };
  const handleDelete = () => {
    console.log("delete");
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
      title: "书名",
      dataIndex: "name",
      key: "name",
      width: 200,
    },
    {
      title: "封面",
      dataIndex: "cover",
      key: "cover",
      width: 100,
      render: (text: string) => {
        return (
          <Image
            src={text}
            alt="Book cover"
            width={60}
            height={80}
            style={{ objectFit: "cover" }}
          />
        );
      },
    },
    {
      title: "作者",
      dataIndex: "author",
      key: "author",
      width: 120,
    },
    {
      title: "分类",
      dataIndex: "category",
      key: "category",
      width: 80,
    },
    {
      title: "描述",
      dataIndex: "description",
      key: "description",
      ellipsis: true,
      width: 300,
      render: (text: string) => {
        return (
          <Tooltip title={text} placement="topLeft">
            {text}
          </Tooltip>
        );
      },
    },
    {
      title: "库存",
      dataIndex: "stock",
      key: "stock",
      width: 80,
    },
    {
      title: "创建时间",
      dataIndex: "createdAt",
      key: "createdAt",
      width: 120,
      render: (text: number) => {
        return dayjs(text).format("YYYY年MM月DD日");
      },
    },
  ];

  const columns = [
    ...COLUMNS,
    {
      title: "操作",
      key: "action",
      render: (_: string, row: any) => {
        return (
          <>
            <Button type="link" onClick={handleEdit}>
              编辑
            </Button>
            <Button type="link" danger onClick={handleDelete}>
              删除
            </Button>
          </>
        );
      },
    },
  ];
  return (
    <>
      <Form
        name="search"
        form={form}
        // layout="horizontal"
        onFinish={handleSearch}
        initialValues={{
          bookName: "",
          author: "",
          category: "1",
        }}
      >
        <Row gutter={24}>
          <Col span={5}>
            <Form.Item name="bookName" label="书名">
              <Input placeholder="请输入书名" allowClear />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item name="author" label="作者">
              <Input placeholder="请输入作者" allowClear />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item name="category" label="分类">
              <Select
                showSearch
                allowClear
                onChange={handleSelect}
                options={[
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
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
                  搜索
                </Button>
              </Space>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <div className="overflow-auto" style={{ height: "calc(100% - 100px)" }}>
        <Table
          dataSource={dataSource}
          columns={columns}
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
