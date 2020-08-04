import React, {useEffect, useState} from 'react';
import Camera from '../Camera';
import {
  Alert,
  Image,
  PermissionsAndroid,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addSample} from '../../store/samples';
import Geolocation from 'react-native-geolocation-service';

async function locationPermission() {
  const permission = PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION;

  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    return true;
  }

  const status = await PermissionsAndroid.request(permission);
  return status === 'granted';
}

const SampleAdd = ({navigation}) => {
  const {samples} = useSelector((state) => state.samples);
  const dispatch = useDispatch();
  const [img, setImg] = useState(null);

  useEffect(() => {
    async function checkLocationPermission() {
      if (!(await locationPermission())) {
        navigation.popToTop();
      }
    }
    checkLocationPermission().then();
  }, [navigation]);

  const handleSendToStore = (data) => {
    const id = samples.length + 1;

    Geolocation.getCurrentPosition(
      (position) => {
        dispatch(
          addSample({
            id,
            picture: data.uri,
            position: position.coords,
            date: new Date().toISOString(),
          }),
        );
        navigation.push('Item', {id});
      },
      (error) => {
        Alert.alert(
          'Error' + error.code,
          'Failed to get position: ' + (error.message || error),
        );
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  function onPicture({uri}) {
    setImg(uri);
  }

  function onBackToCamera() {
    setImg(null);
  }

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        {img ? (
          <TouchableHighlight
            style={{flex: 1}}
            onPress={() => {
              onBackToCamera();
            }}>
            <Image source={{uri: img}} style={{flex: 1}} />
          </TouchableHighlight>
        ) : (
          <Camera onPicture={onPicture} sendToStore={handleSendToStore} />
        )}
      </SafeAreaView>
    </>
  );
};

export default SampleAdd;
