"use client";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Upload,
  Space,
} from "antd";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export default function BookForm() {
  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
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
          <Input.Group compact>
            <Input
              placeholder="请输入封面链接"
              style={{ width: "calc(100% - 100px)" }}
            />
            <Button>预览</Button>
          </Input.Group>
        </Form.Item>
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
            <Button type="primary">提交</Button>
            <Button>取消</Button>
          </div>
        </Form.Item>
      </Form>
    </>
  );
}
