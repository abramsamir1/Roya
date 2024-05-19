import React, {useState} from 'react';
import {View, FlatList, ActivityIndicator, Dimensions} from 'react-native';
import {royaData} from '../../services/RoyaData';
import {ListItem, SearchForm} from '../../components';
import {Button} from '../../components';
import {styles} from './styles';

const PAGE_SIZE = 5;
const isTablet = Dimensions.get('window').width >= 768;

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortAsc, setSortAsc] = useState(true);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [data, setData] = useState(royaData.slice(0, PAGE_SIZE));
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSelect = (id: number) => {
    setSelectedIds(prevSelectedIds =>
      prevSelectedIds.includes(id)
        ? prevSelectedIds.filter(prevId => prevId !== id)
        : [...prevSelectedIds, id],
    );
  };

  const handleDelete = () => {
    setData(currentData =>
      currentData.filter(item => !selectedIds.includes(item.id)),
    );
    setSelectedIds([]);
  };

  const handleLoadMore = () => {
    if (!loading) {
      setLoading(true);
      const nextPage = page + 1;
      const nextSetOfData = royaData.slice(
        page * PAGE_SIZE,
        nextPage * PAGE_SIZE,
      );
      setTimeout(() => {
        // Simulate network request delay
        setData([...data, ...nextSetOfData]);
        setPage(nextPage);
        setLoading(false);
      }, 1500);
    }
  };

  const filteredData = data.filter(
    item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
  );

  const sortedData = filteredData.sort((a, b) =>
    sortAsc ? a.price - b.price : b.price - a.price,
  );

  return (
    <View style={{flex: 1}}>
      <SearchForm
        onChangeText={setSearchQuery}
        value={searchQuery}
        sortType={sortAsc}
        onPress={() => setSortAsc(!sortAsc)}
      />
      <Button
        label="Delete Selected"
        onPress={handleDelete}
        style={styles.deleteBtn}
        styleTitle={styles.deleteLabel}
      />
      <FlatList
        data={sortedData}
        renderItem={({item}) => (
          <ListItem
            item={item}
            onSelect={() => handleSelect(item.id)}
            selected={selectedIds.includes(item.id)}
          />
        )}
        keyExtractor={item => item.id.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" /> : null
        }
        numColumns={isTablet ? 2 : 1}
      />
    </View>
  );
};

export default Search;
