import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Icon} from '@rneui/themed';

import {arr} from '../util/words';

function App(): JSX.Element {
  const [numberOfImage, setNumberOfImage] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <Image
          style={styles.image}
          resizeMode={'contain'}
          source={arr[numberOfImage].image}
        />
        <TouchableOpacity onPress={() => console.log('s')}>
          <Text style={styles.question}>{arr[numberOfImage].question}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('s')}>
          <Text style={styles.question}>{arr[numberOfImage].answer}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomView}>
        <TouchableOpacity onPress={() => setNumberOfImage(numberOfImage - 1)}>
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
            if (numberOfImage != arr.length) {
              setNumberOfImage(numberOfImage + 1);
            }
          }}>
          <Text style={styles.buttonText}>Continue</Text>
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
    fontSize: 40,
    fontFamily: 'me_quran',
    paddingHorizontal: '1%',
  },
  image: {
    width: '90%',
    height: '40%',
  },
  topView: {
    flex: 0.9,
    alignItems: 'center',
  },
  bottomView: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightgreen',
    borderRadius: 5,
    justifyContent: 'center',
    fontWeight: 'bold',
    alignItems: 'center',
    marginHorizontal: '5%',
  },
  buttonText: {
    fontSize: 22,
    paddingHorizontal: '5%',
    paddingVertical: '2%',
  },
});

export default App;
