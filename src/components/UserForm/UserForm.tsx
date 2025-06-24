"use client";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Image,
  message,
} from "antd";
import { useState } from "react";
import { userAdd } from "@/app/api/book";
import { UserType } from "@/app/type/book";
import { useRouter } from "next/navigation";
import { Radio } from "antd";

export default function BookForm() {
  const [form] = Form.useForm();
  const router = useRouter();

  const handleSubmit = async (values: UserType) => {
    await userAdd(values);
    message.success("添加成功");
    router.push("/user/list");
    form.resetFields();
  };

  return (
    <>
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        layout="horizontal"
        style={{ maxWidth: 600, marginTop: "50px" }}
        onFinish={handleSubmit}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: "请输入用户名" }]}
        >
          <Input placeholder="请输入用户名" type="username" />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: "请输入密码" }]}
        >
          <Input placeholder="请输入密码" type="password" />
        </Form.Item>
        <Form.Item
          label="邮箱"
          name="email"
          rules={[
            { required: true, message: "请输入邮箱" },
            { type: "email", message: "请输入正确的邮箱" },
          ]}
        >
          <Input placeholder="请输入邮箱" />
        </Form.Item>
        <Form.Item
          label="性别"
          name="gender"
          rules={[{ required: true, message: "请选择性别" }]}
        >
          <Radio.Group>
            <Radio value={"男"}>男</Radio>
            <Radio value={"女"}>女</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="角色"
          name="role"
          rules={[{ required: true, message: "请选择角色" }]}
        >
          <Radio.Group>
            <Radio value={1}>管理员</Radio>
            <Radio value={2}>普通用户</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginLeft: "50%" }}
          >
            确认
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
