import React, { useState, useEffect } from 'react'
import {
  Platform,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from 'react-native'

//import Words from '../util/allWords.json'
import Nouns from '../util/nouns.json'
import Verbs from '../util/verbs.json'
import Adjectives from '../util/adjectives.json'
import Adverbs from '../util/adverbs.json'

function AllWords({ navigation: { navigate }, route }) {
  const { nouns, verbs, adjectives, adverbs } = route.params

  const [arr, setArr] = useState([])

  useEffect(() => {
    if (verbs) setArr(Verbs)
    if (nouns) setArr(Nouns)
    if (adjectives) setArr(Adjectives)
    if (adverbs) setArr(Adverbs)
  }, [arr])

  return (
    <SafeAreaView>
      <FlatList
        data={arr}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.block}>
            <Text style={styles.kanjiText}>{item.word}</Text>
            <Text style={styles.pronunciation}>{item.pronunciation}</Text>
            <Text style={styles.meaning}>{item.meaning}</Text>
          </TouchableOpacity>
        )}
        numColumns={Platform.OS != 'ios' && Platform.OS != 'android' ? 5 : 3}
        style={styles.flatList} // background color of the FlatList
        contentContainerStyle={styles.flatListContent} // background color of the content
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sectionHeaderWrapper: {
    width: '100%' // Take up the full width of the FlatList
  },
  // background color of the content
  flatListContent: {
    backgroundColor: 'ivory'
  },
  // background color of the FlatList
  flatList: {
    backgroundColor: 'ivory',
    paddingHorizontal: '3%'
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
    borderRadius: 5
  },
  kanjiText: {
    fontSize: 25,
    fontWeight: '500',
    fontFamily: 'me_quran'
  },
  pronunciation: {
    fontSize: 12,
    fontWeight: '200'
  },
  meaning: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Menlo'
  }
})

export default AllWords
