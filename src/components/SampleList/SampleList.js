import React from 'react';
import {Button, List, Text} from 'react-native-paper';
import {formatDistance} from 'date-fns';
import {es} from 'date-fns/locale';
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
  itemContainer: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: 'lightgray',
  },
  item: {
    paddingBottom: 15,
    paddingTop: 15,
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

  const handleAddItem = () => {
    navigation.navigate('Add');
  };

  return (
    <View style={styles.container}>
      {samples.length === 0 ? (
        <Text style={styles.placeholderText}>
          No tienes ninguna muestra todavía
        </Text>
      ) : (
        samples.map((sample, index) => (
          <View style={styles.itemContainer} key={sample.id}>
            <List.Item
              title={'Muestra ' + (index + 1)}
              style={styles.item}
              description={formatDistance(Date.parse(sample.date), new Date(), {
                includeSeconds: true,
                addSuffix: true,
                locale: es,
              })}
              onPress={() => {
                navigation.navigate('Item', {id: sample.id});
              }}
              right={(props) => <List.Icon {...props} icon="arrow-right" />}
            />
          </View>
        ))
      )}
      <View style={styles.bottom}>
        <Button
          style={styles.addButton}
          icon="plus"
          mode="contained"
          onPress={handleAddItem}>
          NUEVA MUESTRA
        </Button>
      </View>
    </View>
  );
};

export default SampleList;
