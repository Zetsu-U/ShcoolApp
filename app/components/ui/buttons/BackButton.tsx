import React, { FC, PropsWithChildren } from "react";
import { IButton } from "./button.interface";
import Button from "./Button";
import { Ionicons } from '@expo/vector-icons';
import cn from "classnames";
import {Text} from "react-native"

const BackButton: FC<PropsWithChildren<IButton>> = ({children, className, ...rest}) => {

    return (
        <Button
        {...rest}
        className={cn('flex flex-raw justify-center items-center gap-x-2', className)}>
            <Ionicons name = 'chevron-back' size={24} color='black'/>
            <Text className={`text-black text-base font-medium`}>
                {children}
            </Text>

        </Button>
    )
}

export default BackButton