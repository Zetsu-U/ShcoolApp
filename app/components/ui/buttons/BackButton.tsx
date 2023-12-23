import React, { FC, PropsWithChildren } from "react";
import { IButton } from "./button.interface";
import Button from "./Button";
import { Ionicons } from '@expo/vector-icons';
import cn from "classnames";
import {Text, View, useWindowDimensions} from "react-native"

const BackButton: FC<PropsWithChildren<IButton>> = ({children, className, ...rest}) => {

    const {width} = useWindowDimensions()

    return (
        <Button
        {...rest}
        style={{maxWidth: width / 1.04}}
        className={cn('w-fit my-2', className)}>
            <View className={`h-fit flex flex-row justify-start iotems-center`}>
            <Ionicons name = 'chevron-back' size={24} color='black'/>
            <Text className={`text-black text-xl font-medium mb-0.5 mx-1`}>
                {children}
            </Text>
            </View>
        </Button>
    )
}

export default BackButton