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
	//ball
	{
		image: require('./src/assets/ball.jpeg'),
		question: 'مَا هٰذِهِ؟',
		answer: 'هٰذِهِ كُرَةٌ'
	},
	{
		image: require('./src/assets/ball.jpeg'),
		question: 'كَيْفَ هٰذِهِ الكُرَةُ ؟',
		answer: 'الكُرَةُ جَمِيْلَةٌ'
	},
	{
		image: require('./src/assets/ball.jpeg'),
		question: 'أيْنَ الكُرَةُ ؟',
		answer: 'الكُرَةُ تَحْتَ الْمَكتبِ'
	},
	{
		image: require('./src/assets/ball.jpeg'),
		question: 'كُرَةُ مَنْ هٰذِهِ؟',
		answer: 'هٰذِهِ كُرَةُ وَلَدٍ'
	},
	{
		image: require('./src/assets/ball.jpeg'),
		question: 'مَنْ يَلْعبُ بِهٰذِهِ الكُرَةِ؟',
		answer: 'يَلْعبُ حَامِدٌ بِهٰذِهِ الْكُرَةِ'
	},
	{
		image: require('./src/assets/ball.jpeg'),
		question: 'هَلْ تلْعَبُ بِهٰذِهِ الْكُرَةِ ؟',
		answer: 'نَعَمْ، أَلْعَبُ بِهٰذِهِ الْكُرَةِ.'
	},
	{
		image: require('./src/assets/ball.jpeg'),
		question: 'لِمَاذا تلْعَبُ الْكُرَةَ ؟',
		answer: 'ألعَبُ الْكُرَةَ تَدَرُّبًا'
	},
	{
		image: require('./src/assets/ball.jpeg'),
		question: 'مَتَى تَلعَبُ الْكُرَةَ ؟',
		answer: 'أَلْعَبُ الْكُرَةَ مَسَاءً'
	},

	//ball
	{
		image: require('./src/assets/flower.jpeg'),
		question: ' مَا هَذِهِ؟',
		answer: 'هَذِهِ زَهْرَةٌ.'
	},
	{
		image: require('./src/assets/flower.jpeg'),
		question: 'كَيْفَ هَذِهِ الزَّهْرَةُ؟',
		answer: 'اَلزَّهْرَةُ رَائِعَةٌ.'
	},
	{
		image: require('./src/assets/flower.jpeg'),
		question: 'أَيْنَ الزَّهْرَةُ؟',
		answer: 'اَلزَّهْرَةُ فِي الإنَاءِ'
	},
	{
		image: require('./src/assets/flower.jpeg'),
		question: 'زَهْرَةُ مَنْ هَذِهِ؟',
		answer: 'هَذِهِ زَهْرَةُ عَائِشَةَ.'
	},
	{
		image: require('./src/assets/flower.jpeg'),
		question: 'مَنْ يَعْتَنِيْ بِهَذِهِ الزَّهْرَةِ؟',
		answer: ' تَعْتَنِيْ عَائِشَةُ هَذِهِ الزَّهْرَةِ.'
	},
	{
		image: require('./src/assets/flower.jpeg'),
		question: ' هَلْ تَعْتَنِيْ بِهَذِهِ الزَّهْرَةِ؟',
		answer: ' نَعَمْ أَعْتَنِيْ بِهَذِهِ الزَّهْرَةِ'
	},
	{
		image: require('./src/assets/flower.jpeg'),
		question: ' لِمَاذَا تَعْتَنِيْ بِهَذِهِ الزَّهْرَةِ؟',
		answer: ' أَعْتَنِيْ بِهَذِهِ الزَّهْرَةِ رَغْبَةً'
	},
	{
		image: require('./src/assets/flower.jpeg'),
		question: ' مَتَى تَعْتَنِيْ بِهَذِهِ الزَّهْرَةِ؟',
		answer: ' أَعْتَنِيْ بِهَذِهِ الزَّهْرَةِ صَبَاحًا.'
	},

	//lamp
	{
		image: require('./src/assets/lamp.jpeg'),
		question: 'مَا هَذَا؟',
		answer: 'هَذَا مِصْبَاحٌ.'
	},
	{
		image: require('./src/assets/flower.jpeg'),
		question: 'كَيْفَ هَذَا الْمِصْبَاحُ؟',
		answer: 'اَلْمِصْبَاحُ مُضِيْئٌ.'
	},
	{
		image: require('./src/assets/flower.jpeg'),
		question: 'أَيْنَ الْمِصْبَاحُ؟',
		answer: 'اَلْمِصْبَاحُ عَلَى الْمَكْتَبِ.'
	},
	{
		image: require('./src/assets/flower.jpeg'),
		question: 'لِمَنْ هَذَا الْمِصْبَاحُ؟',
		answer: 'اَلْمِصْبَاحُ لِنَبِيْلٍ.'
	},
	{
		image: require('./src/assets/flower.jpeg'),
		question: 'مَنْ يُضِيْئُ هَذَا الْمِصْبَاحَ؟',
		answer: 'يُضِيْئُ نَبِيْلٌ هَذَا الْمِصْبَاحَ.'
	},
	{
		image: require('./src/assets/flower.jpeg'),
		question: 'هَلْ تُضِيْئُ هَذَا الْمِصْبَاحَ؟',
		answer: 'نَعَمْ، أُضِيْئُ هَذَا الْمِصْبَاحَ.'
	},
	{
		image: require('./src/assets/flower.jpeg'),
		question: 'لِمَاذَا تُضِيْئُ هَذَا الْمِصْبَاحَ؟',
		answer: 'أُضِيْئُ هَذَا الْمِصْبَاحَ  تَنْوِيرًا'
	},
	{
		image: require('./src/assets/flower.jpeg'),
		question: 'مَتىَ تُضِيْئُ الْمِصْبَاحَ؟',
		answer: 'أُضِيْئُ الْمِصْبَاحَ لَيْلًا.'
	}

	//
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
		borderRadius: wp('5%'),
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
