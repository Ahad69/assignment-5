/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Card } from "antd";
import style from "./uiCss/card.module.css";
import { CardsProps } from "../../Interfaces/globalTypes";
import { useAppSelector } from "../../redux/hook";
import { Link } from "react-router-dom";
const { Meta } = Card;

const Cards = ({ books }: CardsProps) => {
  const { genre, year } = useAppSelector((state) => state.filter);

  let productsData;
  if (genre && year) {
    productsData = books.filter(
      (a) => a.genre == genre && a.publicationDate.split("/")[2] == year
    );
  } else if (genre) {
    productsData = books.filter((a) => a.genre == genre);
  } else if (year) {
    productsData = books.filter((a) => a.publicationDate.split("/")[2] == year);
  } else {
    productsData = books;
  }

  return (
    <div>
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
    </div>
  );
};

export default Cards;
