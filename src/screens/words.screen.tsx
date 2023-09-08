import React from 'react';
import {
  Platform,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import Words from '../util/ar.json';

function AllWords() {
  return (
    <SafeAreaView>
      <FlatList
        data={Words}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.block}>
            <Text style={styles.kanjiText}>{item.targetWord}</Text>
            <Text style={styles.meaning}>{item.englishWord}</Text>
          </TouchableOpacity>
        )}
        numColumns={Platform.OS != 'ios' && Platform.OS != 'android' ? 5 : 3}
        style={styles.flatList} // background color of the FlatList
        contentContainerStyle={styles.flatListContent} // background color of the content
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionHeaderWrapper: {
    width: '100%', // Take up the full width of the FlatList
  },
  sectionHeader: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  // background color of the content
  flatListContent: {
    backgroundColor: 'ivory',
  },
  // background color of the FlatList
  flatList: {
    backgroundColor: 'ivory',
    paddingHorizontal: '3%',
  },
  sectionHeaderText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  separator: {
    height: 10,
  },
  block: {
    flex: 1,
    margin: 2,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'black',
    backgroundColor: 'khaki',
    borderRadius: 5,
  },
  kanjiText: {
    fontSize: 25,
    fontWeight: '500',
    fontFamily: 'me_quran',
  },
  meaning: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Menlo',
  },
});

export default AllWords;
