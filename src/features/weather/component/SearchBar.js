import React from 'react';
import {SearchBar as Search} from 'react-native-elements';

const SearchBar = ({setSearchQuery, searchQuery, showLoading, searchCity}) => {
  return (
    <Search
      placeholder="Search"
      onChangeText={(e) => setSearchQuery(e)}
      value={searchQuery}
      showLoading={showLoading}
      loadingProps={{
        color: 'white',
      }}
      onSubmitEditing={() => searchCity({cityName: searchQuery})}
    />
  );
};

export default SearchBar;
