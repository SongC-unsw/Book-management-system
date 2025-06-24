import BookForm from "@/components/BookForm/BookForm";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <>
      <Header value="添加图书" />
      <BookForm />
    </>
  );
}
