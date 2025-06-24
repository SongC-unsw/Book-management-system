// booksys/src/app/login/page.tsx
"use client";
import React from "react";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6">登录</h1>
        {/* 这里可以放表单 */}
        <form>
          <div className="mb-4">
            <label className="block mb-1">用户名</label>
            <input className="w-full border rounded px-3 py-2" />
          </div>
          <div className="mb-6">
            <label className="block mb-1">密码</label>
            <input
              type="password"
              className="w-full border rounded px-3 py-2"
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
