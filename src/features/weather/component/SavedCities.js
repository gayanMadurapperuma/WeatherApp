import React from 'react';
import {FlatList, SafeAreaView, TouchableOpacity} from 'react-native';
import {List} from 'react-native-paper';

const SavedCities = ({data, addFavorite}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <List.Item
          title={item.name}
          description={`Temperature: ${
            item?.weather?.main?.temp ?? '0'
          } celcius and Cloudiness: ${item?.weather?.clouds?.all ?? '0'}%`}
          right={(props) => (
            <TouchableOpacity
              onPress={() =>
                addFavorite({name: item.name, isFavorite: !item.isFavorite})
              }>
              <List.Icon
                {...props}
                icon="heart"
                color={item.isFavorite ? 'red' : 'grey'}
              />
            </TouchableOpacity>
          )}
        />
      )}
      keyExtractor={(item) => item.name}
    />
  );
};

export default SavedCities;
