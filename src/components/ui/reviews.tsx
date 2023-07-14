import { Avatar, Space } from "antd";
import { TfiUser } from "react-icons/tfi";

const Reviews = () => {
  return (
    <>
      <div className="flex bg-gray-100 p-1 items-center">
        <div className="bg-gray-300 w-12 h-12 flex justify-center items-center rounded-full mr-4">
          <TfiUser className="text-3xl" />
        </div>
        <div className="w-full">
          <b>user name</b>
          <p>
            user review are here. like this is a great book user review are
            here. like this is a great book user review are here. like this is a
            great book user review are here. like this is a great book user
            review are here. like this is a great book user review are here.
            like this is a great book
          </p>
        </div>
      </div>
      <div className="flex bg-gray-100 p-1 items-center mt-5">
        <div className="bg-gray-300 w-12 h-12 flex justify-center items-center rounded-full mr-4">
          <TfiUser className="text-3xl" />
        </div>
        <div className="w-full">
          <b>user name</b>
          <p>user review are here. like this is a great book user review are</p>
        </div>
      </div>
      <div className="flex bg-gray-100 p-1 items-center mt-5">
        <div className="bg-gray-300 w-12 h-12 flex justify-center items-center rounded-full mr-4">
          <TfiUser className="text-3xl" />
        </div>
        <div className="w-full">
          <b>user name</b>
          <p>
            user review are here. like this is a great book user review are
            here. like this is a great book user review are here. like this is a
            great book user review are here. like this is a great book user
            review are here. like this is a great book user review are here.
            like this is a great book
          </p>
        </div>
      </div>
    </>
  );
};

export default Reviews;
