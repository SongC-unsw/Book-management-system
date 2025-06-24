// booksys/src/app/login/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { message } from "antd";
import axios from "axios";
export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const apiURL = "http://localhost:8080/api/v1/login";
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await axios.post(apiURL, {
      username,
      password,
    });
    if (res.status === 200) {
      message.success("登录成功");
      router.push("/");
    } else {
      message.error("登录失败");
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6">登录</h1>
        {/* 这里可以放表单 */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">用户名</label>
            <input
              className="w-full border rounded px-3 py-2"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-1">密码</label>
            <input
              type="password"
              className="w-full border rounded px-3 py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            登录
          </button>
        </form>
      </div>
    </div>
  );
}
