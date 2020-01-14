import React from 'react';
import { Input } from 'antd';
const { Search } = Input;

const SearchBox = () => {
  return (
    <>
      <div className="search-box__wrapper">
        <Search
          placeholder="What do you want to learn?"
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
      <style jsx>{`
        .search-box__wrapper {
          margin: 24px 0;
        }
      `}</style>
    </>
  );
};

export default SearchBox;
