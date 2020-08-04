import React, {useState} from 'react';
import Camera from '../Camera';
import {SafeAreaView, TouchableHighlight, Image} from 'react-native';

const SampleAdd = () => {
  const [img, setImg] = useState(null);

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
          <Camera onPicture={onPicture} />
        )}
      </SafeAreaView>
    </>
  );
};

export default SampleAdd;
