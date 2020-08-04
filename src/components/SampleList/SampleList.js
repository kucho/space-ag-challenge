import React from 'react';
import {Button, Text} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#fff',
  },
  placeholderText: {
    color: 'gray',
    fontSize: 18,
    marginTop: 48,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
  },
  addButton: {
    borderRadius: 20,
    backgroundColor: '#333333',
  },
});

const SampleList = ({navigation}) => {
  const {samples} = useSelector((state) => state.samples);

  return (
    <View style={styles.container}>
      {samples.length === 0 ? (
        <Text style={styles.placeholderText}>
          No tienes ninguna muestra todavía
        </Text>
      ) : (
        samples.map((sample) => null)
      )}
      <View style={styles.bottom}>
        <Button
          style={styles.addButton}
          icon="plus"
          mode="contained"
          onPress={() => navigation.navigate('Add')}>
          NUEVA MUESTRA
        </Button>
      </View>
    </View>
  );
};

export default SampleList;
