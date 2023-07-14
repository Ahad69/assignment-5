import React from "react";
import { Input } from "antd";
const { TextArea } = Input;
import { BsSend } from "react-icons/bs";

const ReviewBox = () => {
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <div className="flex">
        <TextArea
          placeholder="Review"
          className="rounded-l-lg"
          allowClear
          onChange={onChange}
        />
        <button className="bg-blue-400 px-4 rounded-r-lg">
          <BsSend className="text-xl text-white " />
        </button>
      </div>
    </div>
  );
};

export default ReviewBox;
