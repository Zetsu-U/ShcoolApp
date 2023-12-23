import { View, Text } from "react-native";
import { useRootNavigation } from "../../../hooks/useRootNavigation";
import Layout from '../../layout/Layout'
import { IChapterProps } from '../home/chapter-item/chapter-item.interface'
import { ScrollView } from 'react-native'
import ErrorContainer from '../../ui/containers/ErrorContainer'
import FormulaItem from './formula-item/FormulaItem'
import BackButton from '../../ui/buttons/BackButton'

const Formula: any = (props: any) => {

    const navigation = useRootNavigation()
    const chapter: IChapterProps = props?.route?.params

    if (chapter === undefined || chapter.formulas === undefined) return navigation.navigate('Home')

    return (  
        <Layout title={chapter.title}>
            <View className={`bg-white rounded-t-xl py-1`} style={{flex: 1}}>
                <ScrollView className={`px-4`}>
                    <BackButton onPress={() => navigation.navigate('Home')}>
                        Назад
                    </BackButton>
                    {chapter.formulas.length === 0 ? (
                        <ErrorContainer>
                            <Text className='text-black text-sm font-semibold'>
                                Здесь пока нет формул. Но мы уже их добовляем
                            </Text>
                        </ErrorContainer>
                    ) : chapter.formulas.map((formula, index) => (
                        <FormulaItem key={`formula-item-${index}`} {...formula} />
                    ))}
                </ScrollView>
            </View>
        </Layout>
                      
                    
    );
}
export default Formula