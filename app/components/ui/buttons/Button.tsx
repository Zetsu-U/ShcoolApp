import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useRootNavigation } from "../../../hooks/useRootNavigation";
import {Image} from 'expo-image';
import { IButton } from "./button.interface";
import { FC, PropsWithChildren } from "react";


const Button: FC<PropsWithChildren<IButton>> = ({children, ...rest}) => {

    return (  
        <TouchableOpacity {... rest} activeOpacity={0.7}>
            {children}
        </TouchableOpacity>
                      
                    
    );
}



 
export default Button;