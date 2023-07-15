import { ReactNode } from "react";

export interface MyBook {
  _id?: string;
  author: string;
  description: string;
  genre: string;
  image: string;
  title: string;
  publicationDate: string;
}

export interface CardsProps {
  books: MyBook[];
}

export interface IDType {
  id: string | undefined;
}

export interface IReview {
  name: string | undefined;
  text: string | undefined;
}

export interface ILoadAndErrorType {
  loading: boolean;
  isError: boolean;
}

export interface IFilterType {
  year: string;
  genre: string | null;
}

export interface IUserState {
  user: {
    email: null | string;
    firstName: string | undefined;
    lastName: string | undefined;
  };
  isLoading: boolean;
  isError: boolean;
  error: null | string;
}

export interface IProps {
  children: ReactNode;
}

export interface ICredential {
  email: string;
  password: string;
}
