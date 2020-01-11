import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const SearchBox = () => {
  return (
    <div>
      <Search
        placeholder="What do you want to see?"
        onSearch={value => {
          console.log(value);
        }}
        style={{ width: 600 }}
        size="large"
        onPressEnter={value => {
          console.log(value);
        }}
      ></Search>
    </div>
  );
};

export default SearchBox;
