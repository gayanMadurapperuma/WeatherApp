import React, {useCallback, useEffect} from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import {Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import * as weatherActions from '../../../actions/weather';
import {
  searchProcessing,
  isShowWeatherCard,
  searchCityDetails,
  savedCityDetails,
} from '../selector';
import SearchBar from '../component/SearchBar';
import Overlay from '../component/Overlay';
import SavedCities from '../component/SavedCities';

const WeatherContainer = (props) => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = React.useState('');
  const isSearchProcessing = useSelector(searchProcessing);
  const showWeatherCard = useSelector(isShowWeatherCard);
  const searchCityWeatherDetails = useSelector(searchCityDetails);
  const cityDetails = useSelector(savedCityDetails);
  const searchCity = useCallback(
    (info) => {
      dispatch(weatherActions.searchCityRequest(info));
    },
    [dispatch],
  );
  const closeWeatherCard = useCallback(() => {
    dispatch(weatherActions.closeWeatherCard());
  }, [dispatch]);
  const getSavedCities = useCallback(() => {
    dispatch(weatherActions.getSavedCities());
  }, [dispatch]);
  const addFavorite = useCallback(
    (info) => {
      dispatch(weatherActions.addFavoriteRequest(info));
    },
    [dispatch],
  );
  useEffect(() => {
    getSavedCities();
  }, [getSavedCities]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <SearchBar
        placeholder="Search"
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        showLoading={isSearchProcessing}
        searchCity={searchCity}
      />
      <Overlay
        visible={showWeatherCard}
        toggleOverlay={closeWeatherCard}
        weatherData={searchCityWeatherDetails}
        addFavorite={addFavorite}
      />
      <SavedCities data={cityDetails} addFavorite={addFavorite} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  forgot: {
    color: 'white',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
});

export default WeatherContainer;
