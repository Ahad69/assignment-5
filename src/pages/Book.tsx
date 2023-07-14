import ReviewBox from "../components/ui/reviewBox";
import Reviews from "../components/ui/reviews";
import style from "../pages-css/bookDetails.module.css";
import { Tag } from "antd";
import { Link } from "react-router-dom";

const Book = () => {
  return (
    <div className={style.container}>
      <div className={style.detailContainer}>
        <img
          className={style.detailImage}
          src="https://ik.imagekit.io/dlyqigh4b/mael-balland-Wnti9H4PX6Y-unsplash_dDJJPk3G5.jpg?updatedAt=1689321980245"
        />
        <div className={style.detailContent}>
          <h1>
            <b>Title :</b> Books Title is Here
          </h1>
          <br />
          <h1>
            <b>Author :</b> Author Name is Here
          </h1>{" "}
          <br />
          <h1>
            <b>Genre :</b> Books Genre is Here
          </h1>{" "}
          <br />
          <h1>
            <b>Publication Date :</b> Publication Date is Here
          </h1>{" "}
          <br />
          <h1>
            <b>Description :</b> Reviews Title is Here Reviews Title is Here
            Reviews Title is Here Reviews Title is Here Reviews Title is Here
            Reviews Title is Here Reviews Title is Here Reviews Title is Here
            Reviews Title is Here Reviews Title is Here Reviews Title is Here
            Reviews Title is Here Reviews Title is Here Reviews Title is Here
            Reviews Title is Here Reviews Title is Here Reviews Title is Here
            Reviews Title is Here Reviews Title is Here Reviews Title is Here
            Reviews Title is Here Reviews Title is Here Reviews Title is Here
            Reviews Title is Here
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
        <ReviewBox />
        <br />
        <div>
          <Reviews />
        </div>
      </div>
    </div>
  );
};

export default Book;
