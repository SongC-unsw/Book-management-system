"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button, Form, Input, Select } from "antd";

export default function Home() {
  const handleSearch = (values: any) => {
    console.log(values);
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <Form
      name="customized_form_controls"
      layout="inline"
      onFinish={handleSearch}
      initialValues={{
        price: {
          number: 0,
          currency: "rmb",
        },
      }}
    >
      <Form.Item name="bookName" label="书名">
        <Input />
      </Form.Item>
      <Form.Item name="year" label="年份">
        <Input />
      </Form.Item>
      <Form.Item name="author" label="作者">
        <Input />
      </Form.Item>
      <Form.Item name="category" label="分类">
        <Select
          defaultValue="1"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
          ]}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="mr-2">
          清空
        </Button>
        <Button type="primary" htmlType="submit">
          搜索
        </Button>
      </Form.Item>
    </Form>
  );
}
