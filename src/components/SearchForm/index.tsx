import React from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './styles';
import {Button} from '../Button';

interface SearchFormProps {
  onChangeText: (searchTerm: string) => void;
  value: string;
  sortType: boolean;
  onPress: (sortType: boolean) => boolean;
}

const SearchForm: React.FC<SearchFormProps> = ({
  onChangeText,
  value,
  sortType,
  onPress,
}: SearchFormProps) => {
  return (
    <View style={styles.containerView}>
      <View style={styles.searchView}>
        <TextInput
          placeholder="Search..."
          onChangeText={onChangeText}
          value={value}
        />
      </View>
      <Button
        label={sortType ? 'Sort Desc' : 'Sort Asc'}
        onPress={onPress}
        style={styles.sortBtn}
        styleTitle={styles.sortText}
      />
    </View>
  );
};

export {SearchForm};
