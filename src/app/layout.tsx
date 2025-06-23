"use client";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import "@ant-design/v5-patch-for-react-19";
import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, Dropdown, Space } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { DownOutlined } from "@ant-design/icons";

const { Header, Content, Sider } = Layout;

// Sidebar items
const ITEMS = [
  {
    key: `book`,
    // icon: React.createElement(UserOutlined),
    label: `图书管理`,
    children: [
      {
        key: `/book/list`,
        label: `图书列表`,
      },
      {
        key: `/book/add`,
        label: `添加图书`,
      },
      {
        key: `/book/edit`,
        label: `编辑图书`,
      },
    ],
  },
  {
    key: `borrow`,
    // icon: React.createElement(UserOutlined),
    label: `借阅管理`,
    children: [
      {
        key: `/borrow/list`,
        label: `借阅列表`,
      },
      {
        key: `/borrow/add`,
        label: `添加借阅`,
      },
    ],
  },
  {
    key: `user`,
    // icon: React.createElement(UserOutlined),
    label: `用户管理`,
    children: [
      {
        key: `/user/list`,
        label: `用户列表`,
      },
      {
        key: `/user/add`,
        label: `添加用户`,
      },
    ],
  },
  {
    key: `category`,
    // icon: React.createElement(UserOutlined),
    label: `分类管理`,
    children: [
      {
        key: `/category/list`,
        label: `分类列表`,
      },
      {
        key: `/category/add`,
        label: `添加分类`,
      },
    ],
  },
];

const DROPDOWN_ITEMS = [
  {
    key: `/user/profile`,
    label: `个人中心`,
  },
  {
    key: `/user/logout`,
    label: `退出登录`,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const handleMenuClick = ({ key }: { key: string }) => {
    router.push(key);
  };
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Layout style={{ minHeight: "100vh" }}>
          <Header className="header flex items-center space-x-6">
            <Image src="/logo.png" alt="logo" width={50} height={50} />
            <div className="logo text-black">图书管理系统</div>
            <Dropdown menu={{ items: DROPDOWN_ITEMS }} className="ml-auto">
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <UserOutlined />
                  <span>Admin</span>
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </Header>
          <Layout>
            <Sider width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["/book/list"]}
                defaultOpenKeys={["book"]}
                style={{ height: "100%", borderRight: 0 }}
                items={ITEMS}
                onClick={handleMenuClick}
              />
            </Sider>
            <Layout className="bg-gray-100 p-[32px]">
              <Content className="bg-white">
                <AntdRegistry>{children}</AntdRegistry>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </body>
    </html>
  );
}
