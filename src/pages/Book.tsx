/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import ReviewBox from "../components/ui/reviewBox";
import Reviews from "../components/ui/reviews";
import style from "../pages-css/bookDetails.module.css";
import { Tag } from "antd";
import { Link, useParams } from "react-router-dom";
import { useGetBookByIdQuery } from "../redux/books/booksSlice";
import Loader from "../components/ui/loader";

const Book = () => {
  const { id } = useParams();
  const { data: book, isLoading } = useGetBookByIdQuery(id);

  return (
    <div className={style.container}>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <>
          {" "}
          <div className={style.detailContainer}>
            <img className={style.detailImage} src={book?.image} />
            <div className={style.detailContent}>
              <h1>
                <b>Title :</b> {book?.title}
              </h1>
              <br />
              <h1>
                <b>Author :</b> {book?.author}
              </h1>{" "}
              <br />
              <h1>
                <b>Genre :</b> {book?.genre?.toUpperCase()}
              </h1>{" "}
              <br />
              <h1>
                <b>Publication Date :</b> {book?.publicationDate}
              </h1>{" "}
              <br />
              <h1>
                <b>Description :</b> {book?.description.slice(0, 500)}
              </h1>{" "}
              <br />
              <h1>
                <b>Actions :</b>{" "}
                <div>
                  {" "}
                  <Tag color="#87d068">
                    <Link to={"/edit-book"}>Edit</Link>
                  </Tag>
                  <Tag color="#f50">Delete</Tag>
                </div>
              </h1>{" "}
            </div>
          </div>
          <hr className="my-5" />
          <div>
            <ReviewBox id={id} />
            <br />
            <div>
              <Reviews />
            </div>
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default Book;
