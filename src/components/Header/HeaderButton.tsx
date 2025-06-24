"use client";
import { Button } from "antd";
import { useRouter } from "next/navigation";

export default function HeaderButton(props: { api: string; value: string }) {
  const router = useRouter();
  return (
    <Button type="primary" onClick={() => router.push(`${props.api}`)}>
      {props.value}
    </Button>
  );
}
