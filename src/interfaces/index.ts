import { ReactNode } from "react";

export interface IProduct {
  id?: string;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  colors: string[];
  category: {
    name: string;
    imageURL: string;
  };
}

export interface IProductCard {
  id?: string;
  title: string;
  descreption: string;
  productImage: string;
  price: string;
  colors: string[];
  category: {
    name: string;
    imgURL: string;
  };
}

export interface IModal {
  isOpen: boolean;
  close: () => void;
  title?: string;
  children: ReactNode;
}
