/* eslint-disable @typescript-eslint/no-floating-promises */
import { AiFillHeart } from "react-icons/ai";
import { useAppSelector } from "../redux/hook";
import style from "./../pages-css/wishlist.module.css";
import { MyBook } from "../Interfaces/globalTypes";
import { removeFromWishList } from "../redux/features/wishlistSlice";
import { Tooltip, message } from "antd";
import { useDispatch } from "react-redux";
import { persistor } from "../redux/store";
import { isLoading } from "../redux/features/commonOptionsSlice";
import Loader from "../components/ui/loader";
import { BsFillHeartbreakFill, BsFillTrash3Fill } from "react-icons/bs";

export default function Wishlist() {
  const { wishlist } = useAppSelector((state) => state.wishlist);

  const dispatch = useDispatch();
  const { loading } = useAppSelector((state) => state.commonOptions);

  const handleRemoveFromCart = (book: MyBook) => {
    dispatch(removeFromWishList(book));
    message.open({
      type: "error",
      content: "Removed From Wishlist",
    });
  };

  const handleClearStore = () => {
    dispatch(isLoading(true));
    persistor.purge();
    window.location.reload();
  };

  return (
    <div className={style.container}>
      {loading ? (
        <Loader />
      ) : (
        <>
          {" "}
          {wishlist.length == 0 ? (
            <div className="my-56">
              <p className="text-2xl text-blue-400 text-center">
                Wishlist is Empty
              </p>
              <BsFillHeartbreakFill className="text-6xl text-red-700 block m-auto mt-5 " />
            </div>
          ) : (
            <>
              <Tooltip
                placement="topRight"
                title={"Remove All"}
                arrow={true}
                color={"blue"}
              >
                <BsFillTrash3Fill
                  onClick={() => handleClearStore()}
                  className="text-xl block ml-auto my-5 text-red-500 cursor-pointer"
                />
              </Tooltip>
              <div className={style.wishlistContainer}>
                {wishlist.map((a) => (
                  <div className="w-full h-32 bg-gray-50 border border-white hover:shadow-md rounded hover:shadow-blue-500/50 p-2 flex justify-around">
                    <img className="w-24 h-28" src={a.image} />
                    <div className="flex flex-col w-96">
                      <p className="text-xl font-bold">{a.title}</p>
                      <p className="font-bold uppercase text-blue-400">
                        {a.genre}
                      </p>
                      <p className="font-bold text-xl">{a.publicationDate}</p>

                      <AiFillHeart
                        onClick={() => handleRemoveFromCart(a)}
                        className="text-2xl text-red-500 cursor-pointer"
                      />
                    </div>
                  </div>
                ))}
              </div>{" "}
            </>
          )}
        </>
      )}
    </div>
  );
}
