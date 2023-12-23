import React, {FC, useState} from 'react';
import {Text, TouchableOpacity, useWindowDimensions, View} from "react-native";
import { IChapterItem } from './chapter-item.interface';



const ChapterItem: FC<IChapterItem> = ({title, desc, image, formulas, chapters, color = '#0000FF', isLarge = true }) => {

    const {width} = useWindowDimensions()

    return (

        <View
        style = {{width: width / 1.1, height: width / 2}}
        className='flex flex-col my-2 rounded-lg  py-2 px-4 font-bold items-center bg-red-200'>
            <Text className='text-black text-lg font-bold '>{title}</Text>
            <Text className='text-black text-md font-medium'>{desc}</Text>
            
        </View>
    );
};

export default ChapterItem;