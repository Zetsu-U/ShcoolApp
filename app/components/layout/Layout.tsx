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
            <SafeAreaView 
                {...rest} 
                className={cn('bg-blue', className)}
                style={{
                    paddingTop:Platform.OS === 'ios' ? top / 5 : top * 0.9
            }}>
                {title && (                                                                                             
                    <Text className={`text-white text-3xl font-bold px-4 py-2 mb-4 bg-blue shadow-2xl rounded-b-xl`}>
                        {title}
                    </Text>
                )}
            </SafeAreaView>

            <View className="flex-1 bg-blue">
                {children}
            </View>
        </>
                      
                    
    );
};



 
export default Layout;


