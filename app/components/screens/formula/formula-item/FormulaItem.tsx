import React, { FC, useState } from 'react'
import { Text, View, useWindowDimensions } from 'react-native'
import Button from '../../../ui/buttons/Button'
import { IForumulaItem } from './formula-item.inteface'
import { AntDesign } from '@expo/vector-icons'; 
import { Image } from 'expo-image';

const FormulaItem: FC<IForumulaItem> = ({title, image, properties, className, ...rest}) => {

	const {width} = useWindowDimensions()
	const [isExpanded, setIsExpanded] = useState(false)

	return (
		<View {...rest}>
			<View className={`bg-white border-[1px] border-blue rounded-xl py-4 px-6 my-2`}>
				<Text className={`text-blue text-lg font-medium`}>
					{title}
				</Text>
				<Image
					className={`my-4`}
					style={{width: width / 1.8, height: 50}}
					contentFit='contain'
					source={image}
				/>
				<Button onPress={() => setIsExpanded(!isExpanded)}>
					<View className={`flex flex-row justify-start items-center`}>
						<AntDesign name={`${isExpanded ? "up" : "down"}`} size={20} color="#6488e0" />
						<Text className={`text-blue text-base font-medium mx-1`}>
							{!isExpanded ? "Раскрыть" : "Свернуть"} описание
						</Text>
					</View>
				</Button>
				<View className='px-2'>
					{isExpanded && properties && properties.map((property, index) => {
						const data = property.split('-')
						return (
							<Text
							className={`text-black text-sm font-normal my-0.5`} 
							key={`${title}-${property}-${index}`}>
								• {data[0]} - {data[1]}
							</Text>
						)
					})}
				</View>
			</View>
		</View>
	)
}

export default FormulaItem