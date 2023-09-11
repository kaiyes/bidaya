import React, { useState, useEffect } from 'react'
import {
  Platform,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Switch,
  View
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

//import Words from '../util/allWords.json'
import Nouns from '../util/nouns.json'
import Verbs from '../util/verbs.json'
import Adjectives from '../util/adjectives.json'
import Adverbs from '../util/adverbs.json'

//'#B7E4C7'  lightgreen'  'mediumseagreen'  'forestgreen' 'green'
// '#D8F3DC' '#B7E4C7' '#95D5B2' '#74C69D' '#3DAC78'

const colorLevels = {
  1: 'azure',
  2: '#B7E4C7',
  3: 'lightgreen',
  4: 'mediumseagreen',
  5: 'green'
}

function AllWords({ navigation: { navigate }, route }) {
  const { nouns, verbs, adjectives, adverbs } = route.params

  const [arr, setArr] = useState([])
  const [isEnabled, setIsEnabled] = useState(true)
  const [meaningOn, setMeaningOn] = useState(true)

  const [questions, setQuestions] = useState([
    {
      level: 2,
      meaning: 'school',
      nextDateToShow: '14th October',
      pronunciation: 'madrasa',
      wordWithDia: 'مَدْرَسَة',
      wordWithoutDia: 'مدرسة'
    },
    {
      level: 1,
      meaning: 'car',
      nextDateToShow: '14th October',
      pronunciation: 'sayara',
      wordWithDia: 'سَيَّارَة',
      wordWithoutDia: 'سيارة'
    },
    {
      level: 4,
      meaning: 'heart',
      nextDateToShow: '14th October',
      pronunciation: 'qalb',
      wordWithDia: 'قَلْب',
      wordWithoutDia: 'قلب'
    },
    {
      level: 3,
      meaning: 'pen',
      nextDateToShow: '14th October',
      pronunciation: 'qalam',
      wordWithDia: 'قَلَم',
      wordWithoutDia: 'قلم'
    },
    {
      level: 5,
      meaning: 'fish',
      nextDateToShow: '14th October',
      pronunciation: 'samaka',
      wordWithDia: 'سَمَكَة',
      wordWithoutDia: 'سمكة'
    }
  ])

  useEffect(() => {
    if (verbs) setArr(Verbs)
    if (nouns) setArr(Nouns)
    if (adjectives) setArr(Adjectives)
    if (adverbs) setArr(Adverbs)
  }, [arr])

  function pushToQuestionsArray(word) {
    let slightlyChangedword = {
      ...word,
      level: 2,
      nextDateToShow: '14th October'
    }
    if (questions.findIndex(i => i.meaning === word.meaning) === -1) {
      questions.push(slightlyChangedword)
    }
    console.log(slightlyChangedword)
  }

  function whichColor(word) {
    const wordIndex = questions.findIndex(i => i.meaning === word.meaning)
    return wordIndex === -1 ? 'white' : colorLevels[questions[wordIndex].level]
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.basicRow}>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? 'green' : 'gray'}
          onValueChange={() => setIsEnabled(previousState => !previousState)}
          value={isEnabled}
          label={'diacritics'}
        />
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? 'green' : 'gray'}
          onValueChange={() => setMeaningOn(previousState => !previousState)}
          value={meaningOn}
          label={'meaning'}
        />
      </View>

      <FlatList
        data={arr}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              ...styles.block,
              backgroundColor: whichColor(item)
            }}
            onPress={() => pushToQuestionsArray(item)}>
            <Text style={styles.kanjiText}>
              {isEnabled ? item.wordWithDia : item.wordWithoutDia}
            </Text>
            <Text style={styles.pronunciation}>{item.pronunciation}</Text>
            {meaningOn ? (
              <Text style={styles.meaning}>{item.meaning}</Text>
            ) : null}
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
  container: {
    flex: 1,
    paddingHorizontal: wp('5%')
  },
  // background color of the content
  flatListContent: {
    backgroundColor: 'ivory'
  },
  // background color of the FlatList
  flatList: {
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
  },
  diaText: {
    fontSize: 20
  },
  basicRow: {
    flexDirection: 'row'
  }
})

// '#D8F3DC' '#B7E4C7' '#95D5B2' '#74C69D' '#3DAC78'
//'#B7E4C7'  lightgreen'  'mediumseagreen'  'forestgreen' 'green'
//'yellow' 'gold' 'goldenrod' 'orange' 'darkorange'
export default AllWords
