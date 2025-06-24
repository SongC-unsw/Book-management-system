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
import { bookAdd } from "@/app/api/book";
import { BookType } from "@/app/type/book";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
const { TextArea } = Input;

export default function BookForm() {
  const [form] = Form.useForm();
  const router = useRouter();
  const [coverPreview, setCoverPreview] = useState("");

  const handleSubmit = async (values: BookType) => {
    if (values.publishAt) {
      values.publishAt = dayjs(values.publishAt).valueOf();
    }
    await bookAdd(values);
    message.success("添加成功");
    router.push("/book/list");
    form.resetFields();
    setCoverPreview("");
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
          label="书名"
          name="bookName"
          rules={[{ required: true, message: "请输入书名" }]}
        >
          <Input placeholder="请输入书名" />
        </Form.Item>
        <Form.Item
          label="作者"
          name="author"
          rules={[{ required: true, message: "请输入作者" }]}
        >
          <Input placeholder="请输入作者" />
        </Form.Item>
        <Form.Item
          label="分类"
          name="category"
          rules={[{ required: true, message: "请选择分类" }]}
        >
          <Select placeholder="请选择分类">
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="封面" name="cover">
          <div className="flex gap-2">
            <Input placeholder="请输入封面链接" />
            <Button
              type="primary"
              onClick={() => {
                const coverValue = form.getFieldValue("cover");
                setCoverPreview(coverValue);
              }}
            >
              预览
            </Button>
          </div>
        </Form.Item>
        {coverPreview && (
          <Form.Item label="封面预览">
            <Image
              src={coverPreview}
              alt="cover-preview"
              preview={true}
              className="w-full h-full object-contain"
            />
          </Form.Item>
        )}
        <Form.Item label="出版日期" name="publishAt">
          <DatePicker placeholder="请选择出版日期" />
        </Form.Item>
        <Form.Item label="库存" name="stock">
          <InputNumber placeholder="请输入库存" />
        </Form.Item>
        <Form.Item label="描述" name="description">
          <TextArea rows={4} placeholder="请输入描述" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginLeft: "50%" }}
          >
            提交
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
