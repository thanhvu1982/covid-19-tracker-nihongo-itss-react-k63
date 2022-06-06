import { useEffect, useState } from 'react';

const getDataSearch = (text, data) => {
  return data?.filter((item) => {
    return item.name.toLowerCase().includes(text?.toLowerCase());
  });
};

const useSearch = (data) => {
  const [searchText, setSearchText] = useState('');
  const [searchData, setSearchData] = useState(data || []);

  useEffect(() => {
    setSearchData(getDataSearch(searchText, data));
  }, [data, searchText]);

  return [searchData, setSearchText];
};

export default useSearch;