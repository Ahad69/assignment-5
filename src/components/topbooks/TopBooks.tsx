/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useGetBooksQuery } from "../../redux/books/booksSlice";
import Cards from "../ui/card";
import style from "./topbook.module.css";

const TopBooks = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);

  return (
    <div className={style.container}>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Top 10 Latest Books</h1>
        <button className="bg-blue-400 px-3 rounded text-white"></button>
      </div>
      <br />
      <div>
        <hr />
        <div>
          <div>
            {isLoading ? (
              <div className="h-96 flex justify-center items-center">
                <img className="w-32 block m-auto" src="/loader.gif" />
              </div>
            ) : (
              <Cards books={data?.data?.slice(0, 10)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBooks;
