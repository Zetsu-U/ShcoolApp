import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TypeRootStackParamList } from "./navigation.types";
import { routes } from "./routes";

const Stack = createNativeStackNavigator<TypeRootStackParamList>()


const PrivateNavigation = () => {
    return(
        <Stack.Navigator 
        screenOptions={{
            headerShown:false,
            contentStyle: {
                backgroundColor: '#FFFFFF'
            }
        }}>
        
            {routes.map(route => (
                <Stack.Screen key={route.name} {...route} />
            ))}
        </Stack.Navigator>
    )
}

export default PrivateNavigation