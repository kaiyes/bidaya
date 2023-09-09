import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
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

const Pill = ({ index, handlePress, subject, level, isAll }) => (
  <TouchableOpacity
    style={[styles.pill, { backgroundColor: whichColor(subject) }]}
    onPress={handlePress}>
    <Text style={styles.subtitleText}>
      {isAll ? 'All' : subject === 'JLPT' ? 'N' : null}
      {isAll ? null : subject === 'JLPT' ? level - index : index + 1}
    </Text>
  </TouchableOpacity>
)

const VerticalSpacer = ({ height }) => <View style={{ height: `${height}%` }} />
const HorizontalSpacer = ({ width }) => <View style={{ width: `${width}%` }} />

const topics = [
  {
    topicName: 'jlpt',
    header: 'JLPT',
    subtitle: 'N1-N5'
  },
  {
    topicName: 'strokes',
    header: 'Stroke',
    subtitle: '1-24'
  },
  {
    topicName: 'grades',
    header: 'Grade',
    subtitle: '1-9'
  }
]

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
  const [topic, setTopic] = useState()

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}>
      <VerticalSpacer height={3} />

      <View style={styles.blockHolder}>
        <Text style={styles.h1}>Kanji</Text>
        <VerticalSpacer height={2} />
        <Text style={styles.h4}>Japanese characters</Text>
        <VerticalSpacer height={2} />
        <Text style={styles.h4}>With meanings & pronunciations</Text>

        <VerticalSpacer height={3} />

        <View style={styles.basicRow}>
          {topics.map(i => (
            <SmallBlock
              key={i.topicName}
              handlePress={() => setTopic(i.topicName)}
              blockHeader={i.header}
              sub={i.subtitle}
            />
          ))}
        </View>

        <VerticalSpacer height={5} />

        <View style={styles.jlptRow}>
          {topic === 'jlpt' ? (
            <>
              {new Array(5).fill(1).map((i, index) => (
                <Pill
                  key={index}
                  index={index}
                  level={5}
                  subject={'JLPT'}
                  isAll={false}
                  handlePress={() =>
                    navigate('KanjiTemplate', {
                      jlptLevel: 5 - index
                    })
                  }
                />
              ))}
              <Pill
                subject={'tan'}
                isAll={true}
                handlePress={() => navigate('AllKanji', { jlpt: true })}
              />
            </>
          ) : null}

          {topic === 'strokes' ? (
            <>
              {new Array(24).fill(1).map((i, index) => (
                <Pill
                  key={index}
                  index={index}
                  subject={'Stroke'}
                  isAll={false}
                  handlePress={() =>
                    navigate('KanjiTemplate', {
                      strokes: index + 1
                    })
                  }
                />
              ))}
              <Pill
                subject={'tan'}
                isAll={true}
                handlePress={() => navigate('AllKanji', { strokes: true })}
              />
            </>
          ) : null}

          {topic === 'grades' ? (
            <>
              {new Array(9).fill(1).map((i, index) => (
                <Pill
                  key={index}
                  index={index}
                  subject={'Grade'}
                  isAll={false}
                  handlePress={() =>
                    navigate('KanjiTemplate', {
                      grades: index + 1
                    })
                  }
                />
              ))}
              <Pill
                subject={'tan'}
                isAll={true}
                handlePress={() => navigate('AllKanji', { grades: true })}
              />
            </>
          ) : null}
        </View>
      </View>

      <View style={styles.blockHolder}>
        <Text style={styles.h1}>Words 文甫</Text>
        <VerticalSpacer height={2} />
        <Text style={styles.h4}>Words with Hiragana</Text>
        <VerticalSpacer height={2} />
        <Text style={styles.h4}>With meanings & pronunciations</Text>
        <VerticalSpacer height={4} />

        <View style={styles.wordsRow}>
          {words.map(i => (
            <SmallBlock
              handlePress={() =>
                navigate('KanjiTemplate', {
                  jlptLevel: false,
                  grades: false,
                  strokes: false,
                  verbs: i.topicName === 'verbs' ?? false,
                  nouns: i.topicName === 'nouns' ?? false,
                  adjectives: i.topicName === 'adjectives' ?? false,
                  adverbs: i.topicName === 'adverbs' ?? false,
                  isWord:
                    i.topicName === 'verbs' ||
                    'nouns' ||
                    'adjectives' ||
                    'adverbs'
                      ? true
                      : false
                })
              }
              blockHeader={i.header}
              sub={i.subtitle}
            />
          ))}
        </View>
      </View>

      <View style={styles.blockHolder}>
        <Text style={styles.h1}>Kana 仮名</Text>
        <VerticalSpacer height={2} />
        <Text style={styles.h4}>Hirgana & Katakana</Text>
        <VerticalSpacer height={2} />
        <Text style={styles.h4}>Letters of Japanese Language</Text>
        <VerticalSpacer height={4} />

        <View style={[styles.wordsRow, { justifyContent: 'flex-start' }]}>
          <SmallBlock
            handlePress={() =>
              navigate('KanjiTemplate', {
                hiragana: true
              })
            }
            blockHeader={'Hiragana'}
            sub={'Japanese letters'}
          />

          <HorizontalSpacer width={3} />

          <SmallBlock
            handlePress={() =>
              navigate('KanjiTemplate', {
                katakana: true
              })
            }
            blockHeader={'Katakana'}
            sub={'Letters for Foreign words'}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    height: '80%',
    backgroundColor: 'ivory'
  },
  contentContainer: {
    alignItems: 'center',
    backgroundColor: 'ivory',
    paddingBottom: '50%'
  },
  blockHolder: {
    width: '95%',
    paddingHorizontal: '5%',
    borderRadius: 20,
    paddingTop: '7%',
    marginBottom: '5%',
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
