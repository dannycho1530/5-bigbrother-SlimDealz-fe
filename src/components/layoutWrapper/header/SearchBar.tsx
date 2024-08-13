import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff'
    }}
  />
);

const SearchBar: React.FC = () => {
  const navigate = useNavigate();

  const onSearch = (value: string) => {
    if (value) {
      navigate(`/searchResults?query=${encodeURIComponent(value)}`);
    }
  };

  return (
    <Space direction="vertical">
      <Search allowClear onSearch={onSearch} style={{ width: 330 }} />
    </Space>
  );
};

export default SearchBar;
