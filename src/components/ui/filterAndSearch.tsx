/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Select, Input } from "antd";
import genre from "../../../public/genre.json";
import { useAppDispatch } from "../../redux/hook";
import {
  addSearchText,
  changeGenre,
  publicationYear,
} from "../../redux/features/filterSlice";
const { Search } = Input;

const currentYear = new Date().getFullYear();
const years: any[] | undefined = [];

for (let year = currentYear; year >= currentYear - 500; year--) {
  years.push({ value: year.toString(), label: year.toString() });
}

const FilterAndSearch = () => {
  const dispatch = useAppDispatch();
  const onChangeGenre = (value: string) => {
    if (value == undefined) {
      dispatch(changeGenre(""));
    } else {
      dispatch(changeGenre(value));
    }
  };

  const onChangeYear = (value: string) => {
    if (value == undefined) {
      dispatch(publicationYear(""));
    } else {
      dispatch(publicationYear(value));
    }
  };

  const onSearch = (value: string) => {
    if (value == undefined) {
      dispatch(addSearchText(""));
    } else {
      dispatch(addSearchText(value));
    }
  };

  return (
    <div className="flex justify-between items-center my-2">
      <div className="flex justify-between items-center">
        <Select
          showSearch
          placeholder="Select Genre"
          optionFilterProp="children"
          allowClear
          onChange={onChangeGenre}
          filterOption={(input, option) =>
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={genre}
        />
        <Select
          showSearch
          placeholder="Pulbication Year"
          optionFilterProp="children"
          allowClear
          onChange={onChangeYear}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={years}
        />
      </div>

      <Search
        className="w-96"
        placeholder="Search"
        allowClear
        onSearch={onSearch}
        enterButton
      />
    </div>
  );
};

export default FilterAndSearch;
