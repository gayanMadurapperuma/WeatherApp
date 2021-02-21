import React from 'react';
import {
  Overlay as Modal,
  Card,
  Button,
  Text,
  Icon,
} from 'react-native-elements';

const Overlay = ({visible, toggleOverlay, weatherData, addFavorite}) => {
  return (
    <Modal isVisible={visible} onBackdropPress={toggleOverlay}>
      {weatherData && (
        <Card>
          <Card.Title>{weatherData?.name ?? ''}</Card.Title>
          <Card.Divider />
          <Text style={{marginBottom: 10}}>
            Cloudiness: {weatherData?.clouds?.all ?? 0}%
          </Text>
          <Text style={{marginBottom: 10}}>
            Temperature: {weatherData?.main?.temp ?? 0}&deg;
          </Text>
          <Button
            onPress={() =>
              addFavorite({name: weatherData.name, isFavorite: true})
            }
            disabled={typeof weatherData.name === 'string'}
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="Add Favorite"
          />
        </Card>
      )}
      {!weatherData && (
        <Card>
          <Card.Title>{'NOT FOUND'}</Card.Title>
        </Card>
      )}
    </Modal>
  );
};

export default Overlay;
