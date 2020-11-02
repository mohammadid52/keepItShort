import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBarComponent = ({ onChange, searchText }) => {
  console.log(searchText);
  return (
    <SearchContainer>
      <SearchBar
        size="large"
        placeholder="Search"
        bordered={false}
        onChange={onChange}
        value={searchText}
        prefix={
          <AiOutlineSearch
            color="#2A8FF7"
            size={22}
            style={{ marginRight: 10 }}
          />
        }
      />
    </SearchContainer>
  );
};

export default SearchBarComponent;

const SearchContainer = styled.div`
  flex: 1;
  z-index: 9999;
`;
const SearchBar = styled(Input)`
  background: white;
  :hover {
    box-shadow: 0 0px 40px -10px rgba(0, 64, 128, 0.2);
  }
  ::placeholder {
    color: #2a8ff7;
  }
`;
SearchBarComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};
