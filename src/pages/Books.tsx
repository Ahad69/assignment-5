import Cards from "../components/ui/card";
import FilterAndSearch from "../components/ui/filterAndSearch";
import style from "../pages-css/books.module.css";
import { Link } from "react-router-dom";

const Books = () => {
  return (
    <div className={style.container}>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Book List</h1>
        <button className="bg-blue-400 px-3 rounded text-white">
          <Link to="/add-new-book">Add New</Link>
        </button>
      </div>
      <br />
      <div>
        <FilterAndSearch />

        <hr />
        <div>
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Books;
