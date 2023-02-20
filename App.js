import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Icon} from '@rneui/themed';

const arr = [
  {
    image: require('./src/assets/kitab.png'),
    questions: ['مَا هٰذَا؟ ', 'أيْنَ الْكِتَابُ؟'],
    ansers: ['هَذا كتابٌ', 'لكتابُ علَى الْمَكتبِ'],
    test: 'hey',
  },
];

export default function App() {
  const [qNumber, setQnumber] = useState(0);
  const [ansNumber, setAnsNumber] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 0.9,
          alignItems: 'center',
        }}>
        <Image
          style={styles.image}
          resizeMode={'contain'}
          source={require('./src/assets/kitab.png')}
        />

        <TouchableOpacity onPress={() => console.log('s')}>
          <Text style={styles.question}>{arr[0].questions[qNumber]}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('s')}>
          <Text style={styles.question}>{arr[0].ansers[ansNumber]}</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 0.1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={styles.arrow}
          onPress={() => {
            setQnumber(qNumber - 1);
            setAnsNumber(ansNumber - 1);
          }}>
          <Icon
            name={'arrow-back-circle'}
            type={'ionicon'}
            size={30}
            color={'black'}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setQnumber(qNumber + 1);
            setAnsNumber(ansNumber + 1);
          }}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.arrow}
          onPress={() => {
            setQnumber(qNumber + 1);
            setAnsNumber(ansNumber + 1);
          }}>
          <Icon
            name={'arrow-forward-circle'}
            type={'ionicon'}
            size={30}
            color={'black'}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  question: {
    fontSize: hp('6%'),
    fontFamily: 'KFGQPCUthmanicScriptHAFS',
  },
  image: {
    width: wp('90%'),
    height: hp('40%'),
  },
  button: {
    backgroundColor: 'lightgreen',
    borderRadius: wp('5%'),
    justifyContent: 'center',
    fontWeight: 'bold',
    alignItems: 'center',
    marginHorizontal: wp('5%'),
  },
  buttonText: {
    fontSize: 22,
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
  },
});
