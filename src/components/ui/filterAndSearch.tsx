/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Select, Input } from "antd";
import genre from "../../../public/genre.json";
import year from "../../../public/publicationYear.json";
const { Search } = Input;

const FilterAndSearch = () => {
  const onChangeGenre = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onChangeYear = (value: string) => {
    console.log(`selected ${value}`);
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
