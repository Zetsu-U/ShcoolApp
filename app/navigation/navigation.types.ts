import { ComponentType } from "react"
import { IChapterProps } from '../components/screens/home/chapter-item/chapter-item.interface'

export type TypeRootStackParamList = {
    //добавлять странички которые будут в аппе использоваться
    Home: undefined
    Formula: IChapterProps
    
}


export interface IRoute {
    name: keyof TypeRootStackParamList
    component: ComponentType
}