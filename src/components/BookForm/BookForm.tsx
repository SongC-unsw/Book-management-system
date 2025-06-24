"use client";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Image,
} from "antd";
import { useState } from "react";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export default function BookForm() {
  const [form] = Form.useForm();

  const [coverPreview, setCoverPreview] = useState("");

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  const handleClear = () => {
    setCoverPreview("");
  };

  return (
    <>
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
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
          <div className="flex justify-end gap-5">
            <Button type="primary" htmlType="submit">
              提交
            </Button>
            <Button>取消</Button>
          </div>
        </Form.Item>
      </Form>
    </>
  );
}
