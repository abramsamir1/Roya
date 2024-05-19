import React from 'react';
import {SafeAreaView} from 'react-native';
import Search from './src/screens/Search';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Search />
    </SafeAreaView>
  );
};

export default App;
