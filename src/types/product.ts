export interface Product {
  id: string;
  imageUrl: string;
  name: string;
  count: number;
  size: {
    width: number;
    height: number;
  };
  weight: string;
  comments: ProductComment[];
}

export interface ProductComment {
  id: string;
  productId: string;
  description: string;
  date: string;
}
