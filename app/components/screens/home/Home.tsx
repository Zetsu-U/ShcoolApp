
import { View } from "react-native";
import { useRootNavigation } from "../../../hooks/useRootNavigation";
import { ChapterData } from "./chapter.data";
import ChapterItem from "./chapter-item/ChapterItem";
import Button from "../../ui/buttons/Button";
import Layout from "../../layout/Layout";
import { ScrollView } from "react-native";
import { useState } from "react";
import { IChapterProps } from "./chapter-item/chapter-item.interface";
import BackButton from "../../ui/buttons/BackButton";


const Home = () => {

    const navigation = useRootNavigation()
    const [routeIndex, setRouteIndex] = useState(0)
    const [currentRoute, setCurrentRoute] = useState<IChapterProps[]>(ChapterData)

    const onChapterPress = (chapter: IChapterProps) => {
        if (chapter.chapters) {
            setCurrentRoute(chapter.chapters)
            setRouteIndex(prev => prev + 1)
        } else {
            navigation.navigate('Formula', chapter)
        }
    }

    const onBackPress = () => {
        setCurrentRoute(ChapterData)
        setRouteIndex(0)
    }


    return (  
        <Layout title='Приложение с формулами'>
            <View className='bg-white rounded-t-2xl' style = {{flex: 1}}>
                <ScrollView className={`px-4`}>
                    {routeIndex > 0 && (
                        <View className='mt-1'>
                            <BackButton onPress={onBackPress}>
                                Назад
                            </BackButton>
                        </View>
                    )}

                {currentRoute.map((chapter, index) => (
                        <Button
                            onPress={() => onChapterPress(chapter)}
                            key={`chapter-item${index}`}>
                                <ChapterItem color={index % 2 === 0 ? "#fbe6bb" : "#f1d3d0"} isLarge={routeIndex === 0} {...chapter} />
                        </Button>
                    ))}
                </ScrollView>
            </View>
        </Layout>                       
    );
}


export default Home;


