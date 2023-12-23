import { NavigationContainer, useNavigation, useNavigationContainerRef } from "@react-navigation/native"
import PrivateNavigation from "./PrivateNavigation"
import { DefaultTheme } from '@react-navigation/native';
import { useColorScheme } from "nativewind/dist/use-color-scheme";



const AppLightTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    text: '#616161',
    card: '#f9f9f9',
    border: '#9F9F9F',
    primary: '#333333',
    background: '#ffffff',
  }
}


const Navigation = ()  => {

    const navRef =  useNavigationContainerRef()

    const colorScheme = useColorScheme();

    return(
        <>
            <NavigationContainer  theme={ AppLightTheme} ref = {navRef}>
                <PrivateNavigation />
            </NavigationContainer>
        </>
    )

}

export default Navigation