/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Card } from "antd";
import style from "./uiCss/card.module.css";
import { CardsProps } from "../../Interfaces/globalTypes";
import { useAppSelector } from "../../redux/hook";
import { Link } from "react-router-dom";
import { BsFillHeartbreakFill } from "react-icons/bs";
const { Meta } = Card;

const Cards = ({ books }: CardsProps) => {
  const { genre, year, searchText } = useAppSelector((state) => state.filter);

  const filterBooks = (query: string) => {
    const searchTerm = query?.toLowerCase()?.trim();

    if (searchTerm === "") {
      return books;
    }
    return books.filter((book) =>
      book?.title?.toLowerCase().includes(searchTerm)
    );
  };

  const filteredbook = filterBooks(searchText);

  let productsData;

  if (genre && year && searchText) {
    productsData = books.filter(
      (a) =>
        a.genre == genre &&
        a.publicationDate.split("/")[2] == year &&
        filteredbook
    );
  }
  if (genre && year) {
    productsData = books.filter(
      (a) => a.genre == genre && a.publicationDate.split("/")[2] == year
    );
  }

  if (genre && searchText) {
    productsData = books.filter((a) => a.genre == genre && filteredbook);
  }

  if (searchText && year) {
    productsData = books.filter(
      (a) => a.publicationDate.split("/")[2] == year && filteredbook
    );
  } else if (genre) {
    productsData = books.filter((a) => a.genre == genre);
  } else if (year) {
    productsData = books.filter((a) => a.publicationDate.split("/")[2] == year);
  } else if (searchText) {
    productsData = filteredbook;
  } else {
    productsData = books;
  }

  return (
    <div>
      {productsData.length == 0 ? (
        <div className="my-56 w-full">
          <p className="text-2xl text-blue-400 text-center">No Book found</p>
          <BsFillHeartbreakFill className="text-6xl text-red-700 block m-auto mt-5 " />
        </div>
      ) : (
        <div className={style.card}>
          {productsData.map((a) => (
            <Link to={`/book/${a._id}`}>
              <Card
                hoverable
                style={{
                  width: 260,
                  margin: "auto",
                }}
                cover={<img className="h-56" alt="example" src={a?.image} />}
              >
                <Meta className="text-xl" title={a?.title} />
                <p>
                  <b>Author :</b> {a?.author}
                </p>
                <p>
                  <b>Genre :</b> {a?.genre}
                </p>
                <p>
                  <b>Published in :</b> {a?.publicationDate}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cards;
