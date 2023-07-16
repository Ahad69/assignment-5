/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import ReviewBox from "../components/ui/reviewBox";
import Reviews from "../components/ui/reviews";
import style from "../pages-css/bookDetails.module.css";
import { Tag, message } from "antd";
import { Link, useParams } from "react-router-dom";
import {
  useDeleteBookMutation,
  useGetBookByIdQuery,
} from "../redux/books/booksSlice";
import Loader from "../components/ui/loader";
import { useAppSelector } from "../redux/hook";
import Swal from "sweetalert2";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { addToWish, removeFromWishList } from "../redux/features/wishlistSlice";
import { useDispatch } from "react-redux";
import { MyBook } from "../Interfaces/globalTypes";

const Book = () => {
  const { id } = useParams();
  const { data: book, isLoading } = useGetBookByIdQuery(id);
  const dispatch = useDispatch();
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

  const { wishlist } = useAppSelector((state) => state.wishlist);
  const isWished = wishlist.find((a) => a._id === id);

  const handleAddToCart = (book: MyBook) => {
    dispatch(addToWish(book));
    message.open({
      type: "success",
      content: "Added to Wishlist",
    });
  };
  const handleRemoveFromCart = (book: MyBook) => {
    dispatch(removeFromWishList(book));
    message.open({
      type: "error",
      content: "Removed From Wishlist",
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
                  <div className="flex items-center">
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

                    {isWished == undefined ? (
                      <AiOutlineHeart
                        onClick={() => handleAddToCart(book)}
                        className="text-2xl text-red-500 cursor-pointer"
                      />
                    ) : (
                      <AiFillHeart
                        onClick={() => handleRemoveFromCart(book)}
                        className="text-2xl text-red-500 cursor-pointer"
                      />
                    )}
                  </div>
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
