/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { TfiUser } from "react-icons/tfi";
import { useGetReviewsQuery } from "../../redux/books/reviewSlice";
import { IDType, IReview } from "../../Interfaces/globalTypes";

const Reviews = ({ id }: IDType) => {
  const { data, isLoading } = useGetReviewsQuery(id);

  return (
    <>
      {isLoading ? (
        "loading"
      ) : (
        <>
          {data?.reviews?.map((a: IReview) => (
            <div className="flex bg-gray-100 p-1 m-1 items-center">
              <div className="bg-gray-300 w-12 h-12 flex justify-center items-center rounded-full mr-4">
                <TfiUser className="text-3xl" />
              </div>
              <div className="w-full">
                <b>{a?.name}</b>
                <p>{a?.text}</p>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Reviews;
