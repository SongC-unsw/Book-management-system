export interface BookQueryType {
  bookName?: string;
  author?: string;
  category?: string;
  current?: number;
  pageSize?: number;
}

export interface BookType {
  bookName: string;
  author: string;
  category: string;
  cover: string;
  publishAt: any;
  stock: number;
  description: string;
}
export interface UserType {
  bookName: string;
  author: string;
  category: string;
  email: string;
  gender: string;
  role: number;
}
