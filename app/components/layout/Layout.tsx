import { TouchableOpacity, View, Text, StyleSheet, Platform } from "react-native";
import {Image} from 'expo-image';
import React, { FC, PropsWithChildren } from "react";
import { ILayout } from "./layout.interface";
import { SafeAreaFrameContext, SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import cn from "classnames"

const Layout: FC<PropsWithChildren<ILayout>> = ({children,title,className, ...rest}) => {

    const {top} = useSafeAreaInsets()

    return (  
        <>
            <SafeAreaView {...rest} className={cn('bg-grey-20', className)}
            style={{
                paddingTop:Platform.OS === 'ios' ? top / 5 : top * 1.1
            }}>
            
                <Text className="">Приложение для формул</Text>
            </SafeAreaView>

            <View className="flex-1">
                {title && (
                    <Text className="text-black text-2xl font-bold px-6 py-2 bg-white shadow-2xl rounded-b-xl">
                        {title}
                    </Text>
                )}
                {children}
            </View>
        </>
                      
                    
    );
};



 
export default Layout;


