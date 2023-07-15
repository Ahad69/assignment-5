/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Cards from "../components/ui/card";
import FilterAndSearch from "../components/ui/filterAndSearch";
import style from "../pages-css/books.module.css";
import { Link } from "react-router-dom";
import { useGetBooksQuery } from "../redux/books/booksSlice";
import Loader from "../components/ui/loader";
import { useAppSelector } from "../redux/hook";

const Books = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);
  const { user } = useAppSelector((state) => state.users);
  return (
    <div className={style.container}>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Book List</h1>
        {user?.email && (
          <button className="bg-blue-400 px-3 rounded text-white">
            <Link to="/add-new-book">Add New</Link>
          </button>
        )}
      </div>
      <br />
      <div>
        <FilterAndSearch />

        <hr />
        <div>{isLoading ? <Loader /> : <Cards books={data?.data} />}</div>
      </div>
    </div>
  );
};

export default Books;
