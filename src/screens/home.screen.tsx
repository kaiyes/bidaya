import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

const whichColor = blockHeader => {
  switch (blockHeader) {
    case 'Stroke':
      return 'palegoldenrod'
    case 'Verbs':
      return 'palegoldenrod'
    case 'JLPT':
      return 'thistle'
    case 'Nouns':
      return 'thistle'
    case 'Grade':
      return 'moccasin'
    case 'Adj':
      return 'moccasin'
    case 'Adverbs':
      return 'lightskyblue'
    case 'Hiragana':
      return 'thistle'
    case 'Katakana':
      return 'moccasin'
    default:
      return 'lightskyblue'
  }
}

const SmallBlock = ({ handlePress, blockHeader, sub }) => (
  <TouchableOpacity
    style={[styles.jlptBlock, { backgroundColor: whichColor(blockHeader) }]}
    onPress={handlePress}>
    <Text style={styles.headerMedium}>{blockHeader}</Text>
    <VerticalSpacer height={2} />
    <Text style={styles.subtitleText}>{sub}</Text>
  </TouchableOpacity>
)

const VerticalSpacer = ({ height }) => <View style={{ height: `${height}%` }} />
const HorizontalSpacer = ({ width }) => <View style={{ width: `${width}%` }} />

const words = [
  {
    topicName: 'verbs',
    header: 'Verbs',
    subtitle: '100 verbs'
  },
  {
    topicName: 'nouns',
    header: 'Nouns',
    subtitle: '100 nouns'
  },
  {
    topicName: 'adjectives',
    header: 'Adj',
    subtitle: 'adjectives'
  },
  {
    topicName: 'adverbs',
    header: 'Adverbs',
    subtitle: '100 Adverbs'
  }
]

export default function Home({ navigation: { navigate } }) {
  return (
    <SafeAreaView style={styles.container}>
      <VerticalSpacer height={3} />

      <View style={styles.blockHolder}>
        <Text style={styles.h1}>Words</Text>
        <VerticalSpacer height={2} />
        <Text style={styles.h4}>With meanings & pronunciations</Text>
        <VerticalSpacer height={4} />

        <View style={styles.wordsRow}>
          {words.map(i => (
            <SmallBlock
              key={i.topicName}
              handlePress={() =>
                navigate('List', {
                  verbs: i.topicName === 'verbs' ?? false,
                  nouns: i.topicName === 'nouns' ?? false,
                  adjectives: i.topicName === 'adjectives' ?? false,
                  adverbs: i.topicName === 'adverbs' ?? false,
                  title: i.topicName
                })
              }
              blockHeader={i.header}
              sub={i.subtitle}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%',
    alignItems: 'center',
    backgroundColor: 'ivory'
  },
  blockHolder: {
    marginHorizontal: '5%',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    borderRadius: 20,
    paddingTop: '5%',
    backgroundColor: 'beige'
  },
  jlptBlock: {
    borderRadius: 10,
    width: '30%',
    alignItems: 'center',
    paddingVertical: '3%',
    marginBottom: '2%'
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'flex-start',
    fontFamily: 'menlo'
  },
  headerMedium: {
    fontWeight: '400',
    fontSize: 18,
    fontFamily: 'menlo'
  },
  h3: {
    fontWeight: '300',
    fontSize: 10,
    paddingVertical: '2%',
    fontFamily: 'menlo',
    color: 'dimgray'
  },
  h4: {
    fontWeight: '300',
    fontSize: 15,
    fontFamily: 'menlo',
    color: 'gray'
  },
  subtitleText: {
    fontWeight: '300',
    fontSize: 12,
    fontFamily: 'menlo',
    color: 'dimgray'
  },
  basicRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  wordsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  jlptRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  pill: {
    backgroundColor: 'gold',
    borderRadius: 10,
    width: '18%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp('1%'),
    marginRight: '2%',
    marginBottom: '2%'
  }
})
