import style from "../pages-css/add-books.module.css";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload, Form, Input, Button } from "antd";
import type { RcFile, UploadProps } from "antd/es/upload";
import type { UploadFile } from "antd/es/upload/interface";

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const EditBook = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const onFinish = (value: object) => {
    const file = fileList[0].originFileObj;
    console.log(value, file);
  };

  return (
    <div className={style.container}>
      <div>
        <h1 className="text-2xl font-bold">Edit Book</h1>
        <br />
        <div className="border border-blue-400 p-10 shadow-lg shadow-blue-500/50  rounded">
          <div className="">
            <Upload
              listType="picture-card"
              fileList={fileList}
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 1 ? null : uploadButton}
            </Upload>
            <Modal
              open={previewOpen}
              title={previewTitle}
              footer={null}
              onCancel={handleCancel}
            >
              <img alt="example" style={{ width: "100%" }} src={previewImage} />
            </Modal>
          </div>
          <div>
            <Form layout="vertical" colon={false} onFinish={onFinish}>
              <div className="flex justify-around g-10">
                <Form.Item
                  label="Book Title"
                  name="title"
                  rules={[{ required: true }]}
                  className="w-5/12"
                >
                  <Input size="large" placeholder="Book Title" />
                </Form.Item>

                <Form.Item
                  label="Author Name"
                  name="author"
                  rules={[{ required: true }]}
                  className="w-5/12"
                >
                  <Input size="large" placeholder="Author Name" />
                </Form.Item>
              </div>
              <div className="flex justify-around g-10">
                <Form.Item
                  label="Genre"
                  name="genre"
                  rules={[{ required: true }]}
                  className="w-5/12"
                >
                  <Input size="large" placeholder="Book Genre" />
                </Form.Item>

                <Form.Item label="Gift To" name="gift" className="w-5/12">
                  <Input size="large" placeholder="Author Name" />
                </Form.Item>
              </div>
              <div className="flex justify-center">
                <Form.Item
                  name="description"
                  label="Description"
                  rules={[{ required: true, message: "Description" }]}
                  className="w-11/12"
                >
                  <Input.TextArea className="h-32" showCount maxLength={1000} />
                </Form.Item>
              </div>

              <Form.Item label="" className="w-11/12 ml-12 mt-10">
                <Button
                  className="bg-blue-500 border border-white hover:bg-white hover:border  font-bold border-0 text-white hover:text-white"
                  htmlType="submit"
                >
                  Add Book
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
