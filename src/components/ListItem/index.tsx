import React from 'react';
import {TouchableOpacity, Text, View, Image, Dimensions} from 'react-native';
import {royaData} from '../../services/RoyaData';
import CheckBox from '@react-native-community/checkbox';
import {styles} from './styles';

type Item = (typeof royaData)[0];

interface ItemType {
  item: Item;
  onSelect: () => void;
  selected: boolean;
}

const ListItem = ({item, onSelect, selected}: ItemType) => {
  return (
    <TouchableOpacity style={styles.containerView} onPress={onSelect}>
      <View>
        <CheckBox
          disabled={false}
          value={selected}
          style={styles.checkBoxStyle}
          onChange={onSelect}
        />
        <Image source={{uri: item.image}} style={styles.imgStyle} />
        <View style={styles.infoView}>
          <Text style={styles.infoStyle}>{item.title}</Text>
          <Text style={styles.infoStyle}>{item.description}</Text>
          <Text style={styles.infoStyle}>${item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export {ListItem};
