"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button, Col, Form, Input, Row, Select, Space, Table } from "antd";

export default function Home() {
  const [form] = Form.useForm();
  const handleSearch = (values: any) => {
    console.log(values);
  };
  const handleSelect = (value: string) => {
    console.log(`selected ${value}`);
  };
  const handleClear = () => {
    form.resetFields();
  };

  // dataSource
  const dataSource = [
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
  ];

  const columns = [
    {
      title: "书名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "封面",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "作者",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "分类",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "描述",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "库存",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "创建时间",
      dataIndex: "address",
      key: "address",
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
                  htmlType="submit"
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
      <Table dataSource={dataSource} columns={columns} scroll={{ x: 1000 }} />
    </>
  );
}
