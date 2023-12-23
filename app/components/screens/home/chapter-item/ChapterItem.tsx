import React, {FC, useState} from 'react';
import {Text, TouchableOpacity, useWindowDimensions, View} from "react-native";
import { IChapterItem } from './chapter-item.interface';



const ChapterItem: FC<IChapterItem> = ({title, desc, image, formulas, chapters, color = '#0000FF', isLarge = true }) => {

    return (
        <View className='flex flex-col gap-y-4 py-2 px-4 border-2 border-red-400 font-bold'>
            <Text className='text-black text-lg font-bold'>{title}</Text>
            <Text className='text-black text-md font-medium'>{desc}</Text>
        </View>
    );
};

export default ChapterItem;