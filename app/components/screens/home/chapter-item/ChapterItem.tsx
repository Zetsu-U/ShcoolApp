import React, {FC, useState} from 'react';
import {Text, TouchableOpacity, useWindowDimensions, View} from "react-native";
import { IChapterItem } from './chapter-item.interface';
import {Image} from 'expo-image'




const ChapterItem: FC<IChapterItem> = ({title, desc, image, color='#0000FF', isLarge=true }) => {

    const {width} = useWindowDimensions()

    return (

        <View
        style = {{backgroundColor: color, width: width / 1.1, height: width / 2}}
        className={`flex ${isLarge ? "flex-col items-center": "flex-row items-start"} my-2 rounded-3xl py-4 px-6 font-bold`}>
            <View className={`${!isLarge && "w-[60%]"}`}>
                <Text className={`text-black ${isLarge ? "text-xl" : "text-lg"} font-bold`}>{title}</Text>
                <Text className='text-black text-md font-medium'>{desc}</Text>
            </View>
            <Image
                className='my-auto' 
                source={image}
                style = {{
                    width: isLarge ? 140 : 100, 
                    height: isLarge ? 140 : 100,}}
            />
        </View>
    );
};

export default ChapterItem;