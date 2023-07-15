/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import ReviewBox from "../components/ui/reviewBox";
import Reviews from "../components/ui/reviews";
import style from "../pages-css/bookDetails.module.css";
import { Tag } from "antd";
import { Link, useParams } from "react-router-dom";
import {
  useDeleteBookMutation,
  useGetBookByIdQuery,
} from "../redux/books/booksSlice";
import Loader from "../components/ui/loader";
import { useAppSelector } from "../redux/hook";
import Swal from "sweetalert2";

const Book = () => {
  const { id } = useParams();
  const { data: book, isLoading } = useGetBookByIdQuery(id);

  const { user } = useAppSelector((state) => state.users);
  const [deleteBook] = useDeleteBookMutation();
  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async () => {
      const response = await deleteBook(id);
      if (response.data.deletedCount) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <div className={style.container}>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <>
          {book?.message ? (
            <p className="text-xl text-center text-red-500 my-72">
              {book?.message}
            </p>
          ) : (
            <>
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
                    <b>Description :</b> {book?.description?.slice(0, 500)}
                  </h1>{" "}
                  <br />
                  <h1>
                    <b>Actions :</b>{" "}
                    <div>
                      {" "}
                      <Tag color="#87d068">
                        <Link
                          className="cursor-pointer"
                          to={`/edit-book/${id as string}`}
                        >
                          Edit
                        </Link>
                      </Tag>
                      <Tag
                        className="cursor-pointer"
                        onClick={() => handleDelete(id as string)}
                        color="#f50"
                      >
                        Delete
                      </Tag>
                    </div>
                  </h1>{" "}
                </div>
              </div>
              <hr className="my-5" />
              <div>
                {user?.email && <ReviewBox id={id} />}

                <br />
                <div>
                  <Reviews id={id} />
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Book;
