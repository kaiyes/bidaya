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
		image: require('./src/assets/lamp.jpeg'),
		question: 'كَيْفَ هَذَا الْمِصْبَاحُ؟',
		answer: 'اَلْمِصْبَاحُ مُضِيْئٌ.'
	},
	{
		image: require('./src/assets/lamp.jpeg'),
		question: 'أَيْنَ الْمِصْبَاحُ؟',
		answer: 'اَلْمِصْبَاحُ عَلَى الْمَكْتَبِ.'
	},
	{
		image: require('./src/assets/lamp.jpeg'),
		question: 'لِمَنْ هَذَا الْمِصْبَاحُ؟',
		answer: 'اَلْمِصْبَاحُ لِنَبِيْلٍ.'
	},
	{
		image: require('./src/assets/lamp.jpeg'),
		question: 'مَنْ يُضِيْئُ هَذَا الْمِصْبَاحَ؟',
		answer: 'يُضِيْئُ نَبِيْلٌ هَذَا الْمِصْبَاحَ.'
	},
	{
		image: require('./src/assets/lamp.jpeg'),
		question: 'هَلْ تُضِيْئُ هَذَا الْمِصْبَاحَ؟',
		answer: 'نَعَمْ، أُضِيْئُ هَذَا الْمِصْبَاحَ.'
	},
	{
		image: require('./src/assets/lamp.jpeg'),
		question: 'لِمَاذَا تُضِيْئُ هَذَا الْمِصْبَاحَ؟',
		answer: 'أُضِيْئُ هَذَا الْمِصْبَاحَ  تَنْوِيرًا'
	},
	{
		image: require('./src/assets/lamp.jpeg'),
		question: 'مَتىَ تُضِيْئُ الْمِصْبَاحَ؟',
		answer: 'أُضِيْئُ الْمِصْبَاحَ لَيْلًا.'
	},

	//table
	{
		image: require('./src/assets/table.jpeg'),
		question: 'مَا هَذَا؟',
		answer: 'هَذَا مَكْتَبٌ.'
	},
	{
		image: require('./src/assets/table.jpeg'),
		question: 'كَيْفَ هَذَا الْمَكْتَبُ؟',
		answer: 'اَلْمَكْتَبُ عَالٍ.'
	},
	{
		image: require('./src/assets/table.jpeg'),
		question: 'أَيْنَ الْمَكْتَبُ؟',
		answer: 'اَلْمَكْتَبُ وَسْطَ الغُرْفَةِ'
	},
	{
		image: require('./src/assets/table.jpeg'),
		question: 'لِمَنْ هَذَا الْمَكْتَبُ؟',
		answer: 'اَلْمَكْتَبُ لِعَادِلٍ.'
	},
	{
		image: require('./src/assets/table.jpeg'),
		question: 'مَنْ يُرَتِّبُ هَذَا الْمَكْتَبَ؟',
		answer: 'يُرَتِّبُ عَادِلٌ هَذَا الْمَكْتَبَ.'
	},
	{
		image: require('./src/assets/table.jpeg'),
		question: 'هَلْ تُرَتِّبُ هَذَا الْمَكْتَبَ؟',
		answer: 'نَعَمْ، أُرَتِّبُ هَذَا الْمَكْتَبَ.'
	},
	{
		image: require('./src/assets/table.jpeg'),
		question: 'لِمَاذَا تُرَتِّبُ هَذَا الْمَكْتَبَ؟',
		answer: 'أُرَتِّبُ هَذَا الْمَكْتَبَ تَنْظِيْماً'
	},
	{
		image: require('./src/assets/table.jpeg'),
		question: 'مَتَى تُرَتِّبُ هَذَا الْمَكْتَبَ؟',
		answer: 'أَرَتِّبُ هَذَا الْمَكْتَبَ كُلَّ صَبَاحٍ.'
	},

	//fruits
	{
		image: require('./src/assets/fruits.jpeg'),
		question: 'مَا هَذَا؟',
		answer: 'هَذَا بُرْتُقَالٌ.'
	},
	{
		image: require('./src/assets/fruits.jpeg'),
		question: 'كَيْفَ هَذَا الْبُرْتُقَالُ؟',
		answer: 'اَلْبُرْتُقَالُ لَذِيْذٌ.'
	},
	{
		image: require('./src/assets/fruits.jpeg'),
		question: 'أَيْنَ الْبُرْتُقَالُ؟',
		answer: 'اَلْبُرْتُقَالُ في الطَّبَقِ.'
	},
	{
		image: require('./src/assets/fruits.jpeg'),
		question: 'لِمَنْ هَذَا الْبُرْتُقَالُ؟',
		answer: 'اَلْبُرْتُقَالُ لِحَبِيْبَةَ.'
	},
	{
		image: require('./src/assets/fruits.jpeg'),
		question: 'مَنْ يَأْكُلُ هَذَا الْبُرْتُقَالَ؟',
		answer: 'تَأْكُلُ حَبِيْبَةُ هَذَا الْبُرْتُقَالَ.'
	},
	{
		image: require('./src/assets/fruits.jpeg'),
		question: 'هَلْ تَأْكُلُ هَذَا الْبُرْتُقَالَ؟',
		answer: 'نَعَمْ، آكُلُ هَذَا الْبُرْتُقَالَ.'
	},
	{
		image: require('./src/assets/fruits.jpeg'),
		question: 'لِمَاذَا تَأْكُلُ الْبُرْتُقَالَ؟',
		answer: 'آكُلُ الْبُرْتُقَالَ تَغَذِّيًا'
	},
	{
		image: require('./src/assets/fruits.jpeg'),
		question: 'مَتَى تَأْكُلُ الْبُرْتُقَالَ؟',
		answer: 'سَآكُلُ الْبُرْتُقَالَ ضُحًى.'
	},

	//plate
	{
		image: require('./src/assets/plate.jpeg'),
		question: 'مَا هَذَا؟',
		answer: 'هَذَا طَبَقٌ.'
	},
	{
		image: require('./src/assets/plate.jpeg'),
		question: 'كَيْفَ هَذَا الطَّبَقُ؟',
		answer: 'اَلطَّبَقُ جَمِيْلٌ.'
	},
	{
		image: require('./src/assets/plate.jpeg'),
		question: 'أَيْنَ الطَّبَقُ؟',
		answer: 'اَلطَّبَقُ تَحْتَ الْمَكْتَبِ.'
	},
	{
		image: require('./src/assets/plate.jpeg'),
		question: 'طَبَقُ مَنْ هَذَا؟',
		answer: 'هَذَا طَبَقُ رَيْحَانَةَ.'
	},
	{
		image: require('./src/assets/plate.jpeg'),
		question: 'مَنْ يَغْسِلُ هَذَا الطَّبَقَ.',
		answer: 'تَغْسِلُ رَيْحَانَةُ هَذَا الطَّبَقَ.'
	},
	{
		image: require('./src/assets/plate.jpeg'),
		question: 'هَلْ تَغْسِلُ هَذَا الطَّبَقَ؟',
		answer: 'نَعَمْ أَغْسِلُ هَذَا الطَّبَقَ.'
	},
	{
		image: require('./src/assets/plate.jpeg'),
		question: 'لِمَاذَا تَغْسِلُ هَذَا الطَّبَقَ؟',
		answer: 'أَغْسِلُ هَذَا الطَّبَقَ نَظَافَةً  '
	},
	{
		image: require('./src/assets/plate.jpeg'),
		question: 'مَتَى تَغْسِلُ الطَّبَقَ؟',
		answer: 'أَغْسِلُ الطَّبَقَ بَعْدَ الأَكْلِ'
	},

	//glass
	{
		image: require('./src/assets/glass.jpeg'),
		question: 'مَا هَذِهِ؟',
		answer: 'هَذِهِ نَظَّارَةٌ.'
	},
	{
		image: require('./src/assets/glass.jpeg'),
		question: 'كَيْفَ هَذِهِ النَّظَّارَةُ؟',
		answer: 'اَلنَّظَّارَةُ جَمِيْلَةٌ.'
	},
	{
		image: require('./src/assets/glass.jpeg'),
		question: 'أَيْنَ النَّظَّارَةُ؟',
		answer: 'اَلنَّظَّارَةُ عَلَى الْمَكْتَبِ.'
	},
	{
		image: require('./src/assets/glass.jpeg'),
		question: 'نَظَّارَةُ مَنْ هَذِهِ؟',
		answer: 'هَذِهِ نَظَّارَةُ الْأُسْتَاذَةِ.'
	},
	{
		image: require('./src/assets/glass.jpeg'),
		question: 'مَنْ يَلْبَسُ هَذِهِ النَّظَّارَةَ؟',
		answer: 'تَلْبَسُ الْأُسْتَاذَةُ هَذِهِ النَّظَّارَةَ.'
	},
	{
		image: require('./src/assets/glass.jpeg'),
		question: 'هَلْ تَلْبَسُ هَذِهِ النَّظَّارَةُ؟',
		answer: 'نَعَمْ أَلْبَسُ هَذِهِ النَّظَّارَةَ.'
	},
	{
		image: require('./src/assets/glass.jpeg'),
		question: 'لِمَاذَا تَلْبَسُ النَّظَّارَةَ؟',
		answer: 'أَلْبَسُ النَّظَّارَةَ حِفْظَ الْعَيْنِ.'
	},
	{
		image: require('./src/assets/glass.jpeg'),
		question: 'مَتىَ تَلْبَسُ النَّظَّارَةَ؟',
		answer: 'أَلْبَسُ النَّظَّارَةَ مَسَاءً.'
	},

	//writing
	{
		image: require('./src/assets/writing.jpeg'),
		question: 'مَاذَا تَفْعَلُ ؟',
		answer: 'أنَا أَكْتُبُ'
	},
	{
		image: require('./src/assets/writing.jpeg'),
		question: 'مَاذَا تَكْتُبُ ؟',
		answer: 'أنَا أَكْتُبُ رِسَالَةً'
	},
	{
		image: require('./src/assets/writing.jpeg'),
		question: 'لِمَاذا تَكْتُبُ الرِّسَالةَ؟',
		answer: 'أكتبُ الرِّسَالَةَ  إخبارًا'
	},
	{
		image: require('./src/assets/writing.jpeg'),
		question: 'كيفَ تَكتُبُ الرِّسَالَةَ؟',
		answer: 'أكتبُ الرِّسَالَةَ تَفْصيلًا'
	},
	{
		image: require('./src/assets/writing.jpeg'),
		question: 'مَتَى تكتبُ الرسالة؟',
		answer: 'أكتبُ الرِّسَالَةَ مَسَاءً'
	},
	{
		image: require('./src/assets/writing.jpeg'),
		question: 'لِمَنْ تَكْتُبُ الرِّسَالَةَ؟',
		answer: 'أَكْتُبُ الرِّسَالَةَ لِلْأُمِّ.'
	},

	//reading
	{
		image: require('./src/assets/reading.jpeg'),
		question: 'مَاذَا تَفْعَلُ ؟',
		answer: 'أنَا أَقْرَأُ'
	},
	{
		image: require('./src/assets/reading.jpeg'),
		question: 'مَاذَا تَقْرَأُ ؟',
		answer: 'أنَا أَقْرَأُ كِتَاباً'
	},
	{
		image: require('./src/assets/reading.jpeg'),
		question: 'لِمَاذا تَقْرَأُ الكِتَابَ ؟',
		answer: 'أَقْرَأُ الكتَابَ طَلَبًا لِلْعِلمِ'
	},
	{
		image: require('./src/assets/reading.jpeg'),
		question: 'كيفَ تَقْرَأُ الكتَابَ؟',
		answer: 'أَقْرَأُ الكتَابَ اِنْتِبَاهًا'
	},
	{
		image: require('./src/assets/reading.jpeg'),
		question: 'مَتَى تَقْرَأُ الكتَابَ؟',
		answer: 'أَقْرَأُ الكتَابَ دَائِمًا'
	},
	{
		image: require('./src/assets/reading.jpeg'),
		question: 'أَيْنَ تَقْرَأُ الْكِتَابَ؟',
		answer: 'أَنَا أَقْرَأُ الْكِتَابَ فِي الْمَدْرَسَةِ.'
	},

	//listening
	{
		image: require('./src/assets/listeing.jpeg'),
		question: 'مَاذَا تَفْعَلُ ؟',
		answer: 'أنَا أَسْمَعُ'
	},
	{
		image: require('./src/assets/listeing.jpeg'),
		question: 'مَاذَا تَسْمَعُ ؟',
		answer: 'أنَا أسْمَعُ نَشِيْداً'
	},
	{
		image: require('./src/assets/listeing.jpeg'),
		question: 'لِمَاذا تَسْمَعُ النَّشِيْدَ؟',
		answer: 'أسْمَعُ النَّشِيْدَ مَحَبَّةً'
	},
	{
		image: require('./src/assets/listeing.jpeg'),
		question: 'كيفَ تَسْمَعُ النَّشِيْدَ؟',
		answer: 'أسْمَعُ النَّشِيْدَ مُسْتَمِعًا'
	},
	{
		image: require('./src/assets/listeing.jpeg'),
		question: 'مَتَى تَسْمَعُ النَّشِيْدَ؟',
		answer: 'أسْمَعُ النَّشِيْدَ أحْيَانًا'
	},
	{
		image: require('./src/assets/listeing.jpeg'),
		question: 'أَيْنَ تَسْمَعُ النَّشِيْدَ؟',
		answer: 'أَنَا أَسْمَعُ النَّشِيْدَ فِي الْمَدْرَسَةِ.'
	},

	//story
	{
		image: require('./src/assets/story.jpeg'),
		question: 'مَاذَا تَفْعَلُ ؟',
		answer: 'أنَا أَقُوْلُ'
	},
	{
		image: require('./src/assets/story.jpeg'),
		question: 'مَاذَا تَقُوْلُ ؟',
		answer: 'أنَا أَقُوْلُ قِصَّةً'
	},
	{
		image: require('./src/assets/story.jpeg'),
		question: 'لِمَاذا تَقُوْلُ القِصَّةَ ؟',
		answer: 'أَقُوْلُ القِصَّةَ تَعْليمًا'
	},
	{
		image: require('./src/assets/story.jpeg'),
		question: 'كيفَ تَقُوْلُ القِصَّةَ؟',
		answer: 'أَقُوْلُ القِصَّةَ مَسْرُورًا'
	},
	{
		image: require('./src/assets/story.jpeg'),
		question: 'مَتَى تَقُوْلُ القِصَّةَ؟',
		answer: 'أَقُوْلُ القِصَّةَ بَعدَ العَصْرِ'
	},
	{
		image: require('./src/assets/story.jpeg'),
		question: 'أَيْنَ  تَقُولُ   الْقِصَّةَ؟',
		answer: 'أَنَا  أَقُول الْقِصَّةَ فِي الْبَيْتِ.'
	},

	//eating
	{
		image: require('./src/assets/eating.jpeg'),
		question: 'مَاذَا تَفْعَلُ ؟',
		answer: 'أنَا آكُلُ'
	},
	{
		image: require('./src/assets/eating.jpeg'),
		question: 'مَاذَا تَأْكُلُ ؟',
		answer: 'أنَا آكُلُ خُبْزًا'
	},
	{
		image: require('./src/assets/eating.jpeg'),
		question: 'لِمَاذا تَأكُلُ الخبزَ؟',
		answer: 'آكُلُ الخُبْزَ إِشْبَاعَ الْجُوعِ'
	},
	{
		image: require('./src/assets/eating.jpeg'),
		question: 'كيفَ تَأكُلُ الخبزَ؟',
		answer: 'آكُلُ الخُبْزَ بِبُطْءٍ'
	},
	{
		image: require('./src/assets/eating.jpeg'),
		question: 'مَتَى تَأكُلُ الخبزَ؟',
		answer: 'آكُلُ الخُبْزَ صَبَاحًا'
	},
	{
		image: require('./src/assets/eating.jpeg'),
		question: 'أين تأكل الخبز؟',
		answer: 'آكُلُ الْخُبْزَ فِي الْمَطْعَمِ.'
	},

	//drinking
	{
		image: require('./src/assets/drinking.jpeg'),
		question: 'مَاذَا تَفْعَلُ ؟',
		answer: 'أنَا أَشْرَبُ'
	},
	{
		image: require('./src/assets/drinking.jpeg'),
		question: 'مَاذَا تَشْرَبُ ؟',
		answer: 'أنَا أَشْرَبُ الْمَاءَ'
	},
	{
		image: require('./src/assets/drinking.jpeg'),
		question: 'لِمَاذَا تَشْرَبُ الْمَاءَ؟',
		answer: 'أَشْرَبُ الْمَاءَ إِطْفَاءَ العَطَشِ'
	},
	{
		image: require('./src/assets/drinking.jpeg'),
		question: 'كَيْفَ تَشْرَبُ الْمَاءَ؟',
		answer: 'أَشْرَبُ الْمَاءَ جَالِساً'
	},
	{
		image: require('./src/assets/drinking.jpeg'),
		question: 'مَتَى تَشْرَبُ الْمَاءَ؟',
		answer: 'أَشْرَبُ الْمَاءَ حَاجَةً'
	},
	{
		image: require('./src/assets/drinking.jpeg'),
		question: 'أَيْنَ تَشْرَبُ الْمَاءَ؟',
		answer: 'أَنَا أَشْرَبُ الْمَاءَ فِي الْبَيْتِ.'
	},

	//playing
	{
		image: require('./src/assets/playing.jpeg'),
		question: 'مَاذَا تَفْعَلُ ؟',
		answer: 'أنَا أَلْعَبُ'
	},
	{
		image: require('./src/assets/playing.jpeg'),
		question: 'مَاذَا تَلْعَبُ ؟',
		answer: 'أنَا أَلْعَبُ كُرَةَ القَدَمِ'
	},
	{
		image: require('./src/assets/playing.jpeg'),
		question: 'لِمَاذَا تَلْعَبُ كُرَةَ القَدَمِ؟',
		answer: 'أَلْعَبُ كُرَةَ القَدَمِ حِفْظَ الصِّحَّةِ'
	},
	{
		image: require('./src/assets/playing.jpeg'),
		question: 'أَيْنَ تَلْعَبُ كُرَةَ القَدَمِ؟',
		answer: 'أَلْعَبُ كُرَةَ القَدَمِ فِيْ الْمَلْعَبِ'
	},
	{
		image: require('./src/assets/playing.jpeg'),
		question: 'مَتَى تَلْعَبُ كُرَةَ القَدَمِ؟',
		answer: 'أَلْعَبُ كُرَةَ القَدَمِ قَبْلَ الْمَغْرِبِ'
	},
	{
		image: require('./src/assets/playing.jpeg'),
		question: 'كَيْفَ تَلْعَبُ كُرَةَ الْقَدَمِ؟',
		answer: 'أَلْعَبُ كُرَةَ الْقَدَمِ راغبًا.'
	},

	//drawing
	{
		image: require('./src/assets/drawing.jpeg'),
		question: 'مَاذَا تَفْعَلُ ؟',
		answer: 'أنَا أَرْسُمُ'
	},
	{
		image: require('./src/assets/drawing.jpeg'),
		question: 'مَاذَا تَرْسُمُ ؟',
		answer: 'أنَا أَرْسُمُ صُوْرَةً'
	},
	{
		image: require('./src/assets/drawing.jpeg'),
		question: 'لِمَاذَا تَرْسُمُ الصُّوْرَةَ؟',
		answer: 'أَرْسُمُ الصُّوْرَةَ هِوَايَةً'
	},
	{
		image: require('./src/assets/drawing.jpeg'),
		question: 'كَيْفَ تَرْسُمُ الصُّوْرَةَ؟',
		answer: 'أَرْسُمُ الصُّوْرَةَ قَائِماً'
	},
	{
		image: require('./src/assets/drawing.jpeg'),
		question: 'مَتَى تَرْسُمُ الصُّوْرَةَ؟',
		answer: 'أَرْسُمُ الصُّوْرَةَ  في الفَراغِ'
	},
	{
		image: require('./src/assets/drawing.jpeg'),
		question: 'أَيْنَ تَرْسُمُ الصُّوْرَةَ؟',
		answer: 'أَنَا أَرْسُمُ الصُّوْرَةَ فِي الْمَتْحَفِ'
	},

	//police
	{
		image: require('./src/assets/police.jpeg'),
		question: 'مَاذَا تَفْعَلُ ؟',
		answer: 'أنَا أَنْظُرُ'
	},
	{
		image: require('./src/assets/police.jpeg'),
		question: 'مَاذَا تَنْظُرُ ؟',
		answer: 'أنَا أَنْظُرُ مَنْظَرًا'
	},
	{
		image: require('./src/assets/police.jpeg'),
		question: 'لِمَاذَا تَنْظُرُ الْمنظرَ؟',
		answer: 'أنَا أَنْظُرُ الْمَنْظَرَ رَغْبَةً'
	},
	{
		image: require('./src/assets/police.jpeg'),
		question: 'كيفَ تَنْظُرُ الْمنظرَ؟',
		answer: 'أنَا أَنْظُرُ الْمَنْظَرَ قَاعِدًا'
	},
	{
		image: require('./src/assets/police.jpeg'),
		question: 'أَيْنَ تَنْظُرُ الْمَنْظَرَ؟',
		answer: 'أَنْظُرُ الْمَنْظَرَ خَارجَ البَيْتِ'
	},
	{
		image: require('./src/assets/police.jpeg'),
		question: 'مَتَى تَنْظُرُ الْمَنْظَرَ؟',
		answer: 'أَنْظُرُ الْمَنْظَرَ بَعْدَ الظُّهْرِ'
	},

	//magnify
	{
		image: require('./src/assets/magnify.jpeg'),
		question: 'مَاذَا تَفْعَلُ ؟',
		answer: 'أنَا أَبْحَثُ'
	},
	{
		image: require('./src/assets/magnify.jpeg'),
		question: 'مَاذَا تَبْحَثُ ؟',
		answer: 'أنَا أْبْحَثُ قَلَماً'
	},
	{
		image: require('./src/assets/magnify.jpeg'),
		question: 'لِمَاذا تبحث القلمَ؟',
		answer: 'أنَا أْبْحَثُ القَلَمَ حَاجَةً'
	},
	{
		image: require('./src/assets/magnify.jpeg'),
		question: 'كَيْفَ تَبْحَثُ القَلَمَ ؟',
		answer: 'أْبْحَثُ القَلَمَ مَسْعُورًا'
	},
	{
		image: require('./src/assets/magnify.jpeg'),
		question: 'مَتَى تَبْحَثُ القَلَمَ؟',
		answer: 'أْبْحَثُ القَلَمَ نَادِرًا'
	},
	{
		image: require('./src/assets/magnify.jpeg'),
		question: 'أَيْنَ تَبْحَثُ القَلَمَ ؟',
		answer: 'أْبْحَثُ القَلَمَ فِيْ الغُرْفَةِ'
	},

	//washing
	{
		image: require('./src/assets/washing.jpeg'),
		question: 'مَاذَا تَفْعَلُ ؟',
		answer: 'أنَا أغْسِلُ'
	},
	{
		image: require('./src/assets/washing.jpeg'),
		question: 'مَاذَا تَغْسِلُ ؟',
		answer: 'أنَا أَغْسِلُ ثَوْباً'
	},
	{
		image: require('./src/assets/washing.jpeg'),
		question: 'لِمَاذَا تَغْسِلُ الثَّوْبَ؟',
		answer: 'أَغْسِلُ الثَّوْبَ تَنْظِيفًا'
	},
	{
		image: require('./src/assets/washing.jpeg'),
		question: 'كيف تغسل الثوب؟',
		answer: 'أَغْسِلُ الثَّوْبَ بِبُطْءٍ'
	},
	{
		image: require('./src/assets/washing.jpeg'),
		question: 'مَتَى تَغْسِلُ الثَّوْبَ؟',
		answer: 'أَغْسِلُ الثَّوْبَ يَومَ الجُمُعَةِ'
	},
	{
		image: require('./src/assets/washing.jpeg'),
		question: 'أَيْنَ تَغْسِلُ الثَّوْبَ؟',
		answer: 'أَغْسِلُ الثَّوْبَ فِي الحَمَّامِ'
	},
	{
		image: require('./src/assets/washing.jpeg'),
		question: 'لِمَنْ تَغْسِلُ الثَّوْبَ؟',
		answer: 'أغسل الثوب لي.'
	},

	//door
	{
		image: require('./src/assets/door.jpeg'),
		question: 'مَاذَا تَفْعَلُ ؟',
		answer: 'أنَا أَفْتَحُ'
	},
	{
		image: require('./src/assets/door.jpeg'),
		question: 'مَاذَا تَفْتَحُ ؟',
		answer: 'أنَا أَفْتَحُ بَاباً'
	},
	{
		image: require('./src/assets/door.jpeg'),
		question: 'لِمَاذَا تفتح الباب؟',
		answer: 'أَفْتَحُ البَابَ خُرُوجًا'
	},
	{
		image: require('./src/assets/door.jpeg'),
		question: 'كيف تفتح الباب؟',
		answer: 'أَفْتَحُ البَابَ سَريْعًا'
	},
	{
		image: require('./src/assets/door.jpeg'),
		question: 'كَيْفَ تَفْتَحُ البَابَ ؟',
		answer: 'أَفْتَحُ البَابَ بِلُطْفٍ'
	},
	{
		image: require('./src/assets/door.jpeg'),
		question: 'مَتَى تَفْتَحُ البَابَ ؟',
		answer: 'أَفْتَحُ البَابَ غَالِبًا'
	},
	{
		image: require('./src/assets/door.jpeg'),
		question: 'لِمَنْ تَفْتَحُ الْبَابَ؟',
		answer: 'أَفْتَحُ الْبَابَ لِأَبِيْ.'
	},

	//shopping
	{
		image: require('./src/assets/shopping.jpeg'),
		question: 'مَاذَا تَفْعَلُ ؟',
		answer: 'أنَا أَشْتَرِي'
	},

	{
		image: require('./src/assets/shopping.jpeg'),
		question: 'مَاذَا تَشْتَري ؟',
		answer: 'أنَا أَشْتَرِي كُرَّاسَةً'
	},

	{
		image: require('./src/assets/shopping.jpeg'),
		question: 'لِمَاذَا تَشْتَري الكُرَّاسَةَ؟',
		answer: 'أَشْتَرِي الكُرَّاسَةَ تَدْرِيبًا'
	},

	{
		image: require('./src/assets/shopping.jpeg'),
		question: 'كيفَ تشتري الكُرَّاسَةَ؟ ',
		answer: 'أَشْتَرِي الكُرَّاسَةَ بِالدَّيْنِ/ بِالنُّقُودِ'
	},

	{
		image: require('./src/assets/shopping.jpeg'),
		question: 'مَتَى تشتري الكُرَّاسَةَ؟',
		answer: 'أَشْتَرِي الكُرَّاسَةَ أحْيَانًا'
	},

	{
		image: require('./src/assets/shopping.jpeg'),
		question: 'مِنْ أَيْنَ تَشْتَري الكُرَّاسَةَ ؟',
		answer: 'أَشْتَرِي الكُرَّاسَةَ مِنَ الدُّكَّانِ'
	},

	{
		image: require('./src/assets/shopping.jpeg'),
		question: 'لِمَنْ تَشْتَرِي الْكُرَّاسَةَ؟',
		answer: 'أَشْتَرِي الْكُرَّاسَةَ لِأَخِيْ.'
	},

	//going
	{
		image: require('./src/assets/going.jpeg'),
		question: 'مَاذَا تَفْعَلُ ؟',
		answer: 'أنَا أدْخُلُ'
	},

	{
		image: require('./src/assets/going.jpeg'),
		question: 'أَيْنَ تَدْخُلُ ؟',
		answer: 'أنَا أَدْخُلُ فَصْلًا'
	},

	{
		image: require('./src/assets/going.jpeg'),
		question: 'لِمَاذَ تَدْخُلُ الفَصْلَ؟',
		answer: 'أنَا أَدْخُلُ الفَصْلَ تَعْلِيمًا'
	},

	{
		image: require('./src/assets/going.jpeg'),
		question: 'مَتَى تَدْخُلُ الفَصْلَ ؟',
		answer: 'أَدْخُلُ الفَصْلَ بَعْدَ الطُّلَّابِ'
	},

	{
		image: require('./src/assets/going.jpeg'),
		question: 'كَيْفَ تَدْخُلُ الْفَصْلَ؟',
		answer: 'أَدْخُلُ الْفَصْلَ مُؤَدَّبًا.'
	},

	//school
	{
		image: require('./src/assets/school.jpeg'),
		question: 'مَاذَا تَفْعَلُ ؟',
		answer: 'أنَا أَذْهَبُ'
	},

	{
		image: require('./src/assets/school.jpeg'),
		question: 'أينَ تَذْهَبُ ؟',
		answer: 'أنَا أَذْهَبُ إلَى الْمَدْرَسَةِ'
	},

	{
		image: require('./src/assets/school.jpeg'),
		question: 'لِمَاذا تَذْهَبُ إلَى الْمَدْرَسَةِ',
		answer: 'أَذْهَبُ إلَى الْمَدْرَسَةِ طَلَبًا لِلْعِلْمِ'
	},

	{
		image: require('./src/assets/school.jpeg'),
		question: 'كَيْفَ تَذْهَبُ إلَى الْمَدْرَسَةِ ؟',
		answer: 'أَذْهَبُ إلَى الْمَدْرَسَةِ مَاشِيًا'
	},

	{
		image: require('./src/assets/school.jpeg'),
		question: 'مَتَى تَذْهَبُ إلَى الْمَدْرَسَةِ ؟',
		answer: 'أَذْهَبُ إلَى الْمَدْرَسَةِ صَبَاحًا'
	},

	{
		image: require('./src/assets/school.jpeg'),
		question: 'مِنْ أَيْنَ تَذْهَبُ إِلَى الْمَدْرَسَةِ؟',
		answer: 'أَذْهَبُ مِنَ الْبَيْتِ.'
	},

	//sitting
	{
		image: require('./src/assets/sitting.jpeg'),
		question: 'مَاذَا تَفْعَلُ ؟',
		answer: 'أنَا أَجْلِسُ'
	},

	{
		image: require('./src/assets/sitting.jpeg'),
		question: 'أينَ تَجْلِسُ ؟',
		answer: 'أنَا أَجْلِسُ عَلَى الْمَقْعَدِ.'
	},

	{
		image: require('./src/assets/sitting.jpeg'),
		question: 'لِمَاذَا تَجْلِسُ عَلَى الْمَقْعَدِ؟',
		answer: 'أَجْلِسُ عَلَى الْمَقْعَدِ ارْتِيَاحًا.'
	},

	{
		image: require('./src/assets/sitting.jpeg'),
		question: 'مَتىَ تَجْلِسُ عَلَى الْمَقْعَدِ؟',
		answer: 'أَجْلِسُ عَلَى الْمَقْعَدِ صَبَاحًا وَ مَسَاءً.'
	},

	{
		image: require('./src/assets/sitting.jpeg'),
		question: 'كَيْفَ تَجْلِسُ عَلَى الْمَقْعَدِ؟',
		answer: 'أَجْلِسُ عَلَى الْمَقْعَدِ مُسْتَقِيْمًا.'
	},

	//reading2
	{
		image: require('./src/assets/quran.jpeg'),
		question: 'مَاذَا تَفْعَلُ ؟',
		answer: 'أنَا أَتْلُو'
	},

	{
		image: require('./src/assets/quran.jpeg'),
		question: 'مَاذَا تَتْلُو ؟',
		answer: 'أنَا أَتْلُو القُرْآنَ'
	},

	{
		image: require('./src/assets/quran.jpeg'),
		question: 'لِمَاذَا تَتْلُو القُرْآنَ ؟',
		answer: 'أَتْلُو القُرْآنَ طَلَبًا لِمَرْضَاةِ اللهِ'
	},

	{
		image: require('./src/assets/quran.jpeg'),
		question: 'مَتَى تَتْلُو القُرْآنَ ؟',
		answer: 'أَتْلُو القُرْآنَ صَبَاحًا وَمَسَاءً'
	},

	{
		image: require('./src/assets/quran.jpeg'),
		question: 'كَيْفَ تَتْلُو القُرْآنَ ؟',
		answer: 'أَتْلُو القُرْآنَ تَرْتِيْلًا'
	},

	{
		image: require('./src/assets/quran.jpeg'),
		question: 'أَيْنَ تَتْلُو الْقُرْآنَ؟',
		answer: 'أَتْلُو الْقُرْآنَ فِي الْمَسْجِدِ.'
	},

	//magnify2
	{
		image: require('./src/assets/magnify2.jpeg'),
		question: 'مَاذَا تَفْعَلُ ؟',
		answer: 'أنَا أطْلُبُ'
	},

	{
		image: require('./src/assets/magnify2.jpeg'),
		question: 'مَاذَا تَطْلُبُ ؟',
		answer: 'أنَا أطْلُبُ العِلمَ'
	},

	{
		image: require('./src/assets/magnify2.jpeg'),
		question: 'لِمَاذَا تَطْلُبُ العِلْمَ؟',
		answer: 'أطْلُبُ العِلمَ صِيَانَةً مِنَ الجَهْلِ'
	},

	{
		image: require('./src/assets/magnify2.jpeg'),
		question: 'كَيْفَ تَطْلُبُ العِلْمَ؟',
		answer: 'أطْلُبُ العِلمَ حِفْظًا وَفَهْمًا'
	},

	{
		image: require('./src/assets/magnify2.jpeg'),
		question: 'إلَى مَتَى تَطْلُبُ العِلْمَ؟',
		answer: 'أطْلُبُ العِلمَ إلَى الْمَوْتِ'
	},

	{
		image: require('./src/assets/magnify2.jpeg'),
		question: 'أَيْنَ تَتَعَلَّمُ الْعِلْمَ؟',
		answer: 'أَتَعَلَّمُ الْعِلْمَ فِي الْمَدْرَسَةِ.'
	},

	//honey
	{
		image: require('./src/assets/honey.jpeg'),
		question: 'مَاذَا تَفْعَلُ ؟',
		answer: 'أنَا أبِيْعُ'
	},

	{
		image: require('./src/assets/honey.jpeg'),
		question: 'مَاذَا تَبِيْعُ ؟',
		answer: 'أنَا أبيعُ العَسَل'
	},

	{
		image: require('./src/assets/honey.jpeg'),
		question: 'أَيْنَ تَبيعُ  العَسَل ؟',
		answer: 'أَبِيْعُ العَسَل  فِي السُّوْقِ'
	},

	{
		image: require('./src/assets/honey.jpeg'),
		question: 'مَتَى تَبيعُ العَسَل ؟',
		answer: 'أَبِيْعُ العَسَل بَعْدَ الفَجْرِ'
	},

	{
		image: require('./src/assets/honey.jpeg'),
		question: 'لِمَاذَا تَبيعُ العَسَل ؟',
		answer: 'أَبِيْعُ العَسَلَ كَسْبَ  المَعَاشِ'
	},

	{
		image: require('./src/assets/honey.jpeg'),
		question: 'كَيْفَ تَبِيْعُ العَسَل ؟',
		answer: 'أَبِيْعُ العَسَل نَقْدًا.'
	},

	//dua
	{
		image: require('./src/assets/dua.jpeg'),
		question: 'مَاذَا تَفْعَلُ ؟',
		answer: 'أنَا أُصَلِّي'
	},

	{
		image: require('./src/assets/dua.jpeg'),
		question: 'أَينَ تُصَلِّي ؟',
		answer: 'أنَا أُصلِّي فِي الْمسجدِ'
	},

	{
		image: require('./src/assets/dua.jpeg'),
		question: 'مَتَى تُصَلِّي ؟',
		answer: 'أُصلِّي فِيْ اليَوْمِ خَمْسَ مَرَّاتٍ'
	},

	{
		image: require('./src/assets/dua.jpeg'),
		question: 'كَيْفَ تُصَلِّي ؟',
		answer: 'أُصلِّي جَمَاعَةً'
	},

	{
		image: require('./src/assets/dua.jpeg'),
		question: 'لِمَاذَا تُصَلِّي ؟',
		answer: 'أُصلِّي لِلّهِ'
	},

	//cooking
	{
		image: require('./src/assets/cooking.jpeg'),
		question: 'أنَا أطبُخُ',
		answer: 'مَاذَا تَفْعَلُ ؟'
	},

	{
		image: require('./src/assets/cooking.jpeg'),
		question: 'أنَا أطبُخُ اللَّحْمَ',
		answer: 'مَاذَا تَطْبُخُ ؟'
	},

	{
		image: require('./src/assets/cooking.jpeg'),
		question: 'أَطْبُخُ اللَّحْمَ فِي الْمَطْبَخِ',
		answer: 'أَيْنَ تَطْبُخُ اللَّحْمَ ؟'
	},

	{
		image: require('./src/assets/cooking.jpeg'),
		question: 'أَطْبُخُ اللَّحْمَ ظُهْراً',
		answer: 'مَتَى تَطْبُخُ اللَّحْمَ ؟'
	},

	{
		image: require('./src/assets/cooking.jpeg'),
		question: 'أَطْبُخُ اللَّحْمَ مَشْوِيًّا',
		answer: 'كَيْفَ تَطْبُخُ اللَّحْمَ ؟'
	},

	{
		image: require('./src/assets/cooking.jpeg'),
		question: 'أَطْبُخُ اللَّحْمَ تَنَزُّهًا.',
		answer: 'لِمَاذَا تَطْبُخُ اللَّحْمَ؟'
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
					onPress={() => {
						if (number != arr.length) {
							setNumber(number + 1)
						}
					}}>
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
