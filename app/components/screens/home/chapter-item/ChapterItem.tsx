import React, {FC, useState} from 'react';
import {Text, TouchableOpacity, useWindowDimensions, View} from "react-native";
import { IChapterItem } from './chapter-item.interface';
import {Image} from 'expo-image'




const ChapterItem: FC<IChapterItem> = ({title, desc, image, formulas, chapters, color = '#0000FF', isLarge = true }) => {

    const {width} = useWindowDimensions()

    return (

        <View
        style = {{width: width / 1.1, height: width / 2}}
        className={`flex ${isLarge? "flex-col": "flex-row"} my-2 rounded-3xl  py-2 px-4 font-bold items-center bg-red-200`}>
            <View>
                <Text className='text-black text-lg font-bold '>{title}</Text>
                <Text className='text-black text-md font-medium'>{desc}</Text>
            </View>

            <View>
            <Image 
            source={image}
            style = {{width: 100, height: 100}}
            />
            </View>
            
        </View>
    );
};

export default ChapterItem;