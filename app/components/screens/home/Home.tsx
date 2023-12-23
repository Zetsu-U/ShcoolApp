
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useRootNavigation } from "../../../hooks/useRootNavigation";
import {Image} from 'expo-image';
import { ChapterData } from "./chapter.data";
import ChapterItem from "./chapter-item/ChapterItem";
import Button from "../../ui/buttons/Button";
import Layout from "../../layout/Layout";
import { ScrollView } from "react-native";
import { useState } from "react";
import { IChapterProps } from "./chapter-item/chapter-item.interface";
import BackButton from "../../ui/buttons/BackButton";


const Home = () => {

    const [currentRoute, setCurrentRoute] = useState<IChapterProps[]>(ChapterData)
    const [routeIndex, setRouteIndex] = useState(0)

    const onChapterPress = (chapter: IChapterProps) => {
        if (chapter. chapters) {
            setCurrentRoute(chapter.chapters)
            setRouteIndex(prev => prev + 1)
        }
    }

    const onBackPress = () => {
        
    }
    //const navigation = useRootNavigation()


    return (  
        <Layout title='Приложение с формулами'>
            <View className='bg-white rounded-t-2xl' style = {{flex: 1}}>
                <ScrollView className={`px-4`}>
                    {routeIndex > 0 && (
                        <BackButton onPress={onBackPress}>
                            Назад
                        </BackButton>
                    )}

                {currentRoute.map((chapter, index) => (
                        <Button
                            onPress={() => onChapterPress(chapter)}
                            key={`chapter-item${index}`}>
                                <ChapterItem color={""} isLarge={true} {...chapter} />
                        </Button>
                    ))}
                </ScrollView>
            </View>
        </Layout>                       
    );
}



 
export default Home;



// const styles = StyleSheet.create({
//     header: {
//         paddingTop: 50,
//         height: 100,
//         backgroundColor: 'silver',
//     },
//     text: {
//         textAlign:"center",
//         fontWeight: 'bold',
//         fontSize: 20
//     },
//     main_C: {
//         height: '40%',
//         width: "95%",
//         borderRadius: 20
//     }




// });


