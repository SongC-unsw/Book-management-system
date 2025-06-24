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
import { useRouter, usePathname } from "next/navigation";
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
    key: `user`,
    // icon: React.createElement(UserOutlined),
    label: `用户管理`,
    children: [
      {
        key: `/user/add`,
        label: `添加用户`,
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
  const pathname = usePathname();
  const isLogin = pathname.includes("/login");
  const handleMenuClick = ({ key }: { key: string }) => {
    router.push(key);
  };
  return (
    <html lang="en">
      <body>
        {isLogin ? (
          <div>{children}</div>
        ) : (
          <Layout>
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
            <Layout style={{ height: "calc(100vh - 64px)" }}>
              <Sider width={200}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={["/book/list"]}
                  defaultOpenKeys={["book"]}
                  className="h-full"
                  items={ITEMS}
                  onClick={handleMenuClick}
                />
              </Sider>
              <Layout className="bg-gray-100 p-8">
                <Content className="bg-white rounded-[16px] p-8">
                  <AntdRegistry>{children}</AntdRegistry>
                </Content>
              </Layout>
            </Layout>
          </Layout>
        )}
      </body>
    </html>
  );
}
