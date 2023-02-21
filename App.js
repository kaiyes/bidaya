import React, { useState } from 'react'
import type { PropsWithChildren } from 'react'
import {
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity
} from 'react-native'
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { Icon } from '@rneui/themed'

const arr = [
	{
		image: require('./src/assets/kitab.jpeg'),
		question: 'مَا هٰذَا؟',
		answer: 'هَذا كتابٌ'
	},
	{
		image: require('./src/assets/kitab.jpeg'),
		question: 'أيْنَ الْكِتَابُ؟',
		answer: 'لكتابُ علَى الْمَكتبِ'
	},
	{
		image: require('./src/assets/kitab.jpeg'),
		question: 'كِتَابُ مَنْ هذا؟',
		answer: 'هذا كتابُ مُدَرِّسٍ'
	},
	{
		image: require('./src/assets/kitab.jpeg'),
		question: 'مَنْ يَدرُسُ هَذا الكِتَابَ؟',
		answer: 'يدرُسُ حَامِدٌ هَذا الكِتَابَ'
	},
	{
		image: require('./src/assets/kitab.jpeg'),
		question: 'هَلْ تَدْرُسُ هَذا الكتابَ؟',
		answer: 'نعم، أَدْرُسُ هذا الكتابَ.'
	},
	{
		image: require('./src/assets/kitab.jpeg'),
		question: 'لِمَاذا تدرسُ الكتابَ؟',
		answer: 'أدرُسُ طَلَبًا لِلْعِلْمِ'
	},
	{
		image: require('./src/assets/kitab.jpeg'),
		question: 'مَتَى تَدْرُسُ الكتابَ؟',
		answer: 'أدرس صَبَاحًا وَلَيلًا'
	},

	{
		image: require('./src/assets/ball.jpeg'),
		question: 'مَا هٰذِهِ؟',
		answer: 'هٰذِهِ كُرَةٌ'
	}
]

export default function App() {
	const [number, setNumber] = useState(0)

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.topView}>
				<Image
					style={styles.image}
					resizeMode={'contain'}
					source={arr[number].image}
				/>
				<TouchableOpacity onPress={() => console.log('s')}>
					<Text style={styles.question}>{arr[number].question}</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => console.log('s')}>
					<Text style={styles.question}>{arr[number].answer}</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.bottomView}>
				<TouchableOpacity
					style={styles.arrow}
					onPress={() => setNumber(number - 1)}>
					<Icon
						name={'arrow-back-circle'}
						type={'ionicon'}
						size={30}
						color={'black'}
					/>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button}
					onPress={() => setNumber(number + 1)}>
					<Text style={styles.buttonText}>Continue</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	question: {
		fontSize: hp('4%'),
		fontFamily: 'me_quran',
		paddingHorizontal: '1%'
	},
	image: {
		width: '90%',
		height: '40%'
	},
	topView: {
		flex: 0.9,
		alignItems: 'center'
	},
	bottomView: {
		flex: 0.1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	button: {
		backgroundColor: 'lightgreen',
		borderRadius: '5%',
		justifyContent: 'center',
		fontWeight: 'bold',
		alignItems: 'center',
		marginHorizontal: '5%'
	},
	buttonText: {
		fontSize: 22,
		paddingHorizontal: '5%',
		paddingVertical: '2%'
	}
})
