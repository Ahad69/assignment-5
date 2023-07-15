/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { FormEvent, useState } from "react";
import { Input } from "antd";
const { TextArea } = Input;
import { BsSend } from "react-icons/bs";
import { usePostReviewMutation } from "../../redux/books/reviewSlice";

interface IDType {
  id: string | undefined;
}

const ReviewBox = ({ id }: IDType) => {
  const [value, setValue] = useState("");
  const [postReview, { isLoading }] = usePostReviewMutation();

  const hanldeSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const opions = {
      id: id,
      data: { review: value },
    };
    postReview(opions);
    setValue("");
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };

  console.log(isLoading);

  return (
    <div>
      <div>
        <form onSubmit={hanldeSubmit} className="flex">
          <TextArea
            placeholder="Review"
            className="rounded-l-lg"
            allowClear
            onChange={onChange}
            value={value}
            name="review"
          />
          <button type="submit" className="bg-blue-400 px-4 rounded-r-lg">
            {isLoading ? (
              <span className="loading loading-spinner loading-md text-white"></span>
            ) : (
              <BsSend className="text-2xl text-white " />
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewBox;
