/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Select, Input } from "antd";
import genre from "../../../public/genre.json";
import year from "../../../public/publicationYear.json";
import { useAppDispatch } from "../../redux/hook";
import { changeGenre, publicationYear } from "../../redux/features/filterSlice";
const { Search } = Input;

const FilterAndSearch = () => {
  const dispatch = useAppDispatch();
  const onChangeGenre = (value: string) => {
    if (value == undefined) {
      dispatch(changeGenre(""));
    } else {
      dispatch(changeGenre(value));
    }
  };

  const onChangeYear = (value: number) => {
    if (value == undefined) {
      dispatch(publicationYear(2023));
    } else {
      dispatch(publicationYear(value));
    }
  };

  const onSearch = (value: string) => console.log(value);

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
          options={year}
        />
      </div>

      <Search
        className="w-96"
        placeholder="Search"
        onSearch={onSearch}
        enterButton
      />
    </div>
  );
};

export default FilterAndSearch;
