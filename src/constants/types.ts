export type Product = {
  key?: string;
  brand: string;
  category: string;
  description: string;
  id: number;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
};

export type FormDataType = {
  title: string;
  author: string;
  year: number | undefined;
  rating: number | undefined;
};
