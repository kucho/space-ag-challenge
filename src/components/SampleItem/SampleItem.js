import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {List} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {formatDate} from '../../utils/common';

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 18,
    textAlign: 'left',
  },
  description: {
    color: 'white',
    fontSize: 10,
  },
  picture: {
    width: '100%',
    height: 300,
  },
  header: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.9,
    elevation: 10,
    padding: 1,
    width: '80%',
    marginTop: 24,
    marginBottom: 48,
  },
  cardTitle: {
    color: 'dimgray',
  },
  mapContainer: {},
};

const SampleItem = ({route, navigation}) => {
  const {samples} = useSelector((state) => state.samples);
  const {id} = route.params;
  const sample = samples.find((el) => el.id === id);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <List.Item
          titleStyle={styles.title}
          descriptionStyle={styles.description}
          title={'Muestra ' + sample.id}
          description={formatDate(sample.date)}
        />
      ),
    });
  }, [navigation, sample]);

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer} />
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.cardTitle}>Foto</Text>
        </View>
        <Image style={styles.picture} source={{uri: sample.picture}} />
      </View>
    </View>
  );
};

export default SampleItem;
