import { NavigationProp, useNavigation } from "@react-navigation/native"
import { TypeRootStackParamList } from "../navigation/navigation.types"


export const useRootNavigation = () => {
    return useNavigation<NavigationProp<TypeRootStackParamList>>()
}