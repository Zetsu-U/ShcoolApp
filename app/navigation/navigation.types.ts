import { ComponentType } from "react"

export type TypeRootStackParamList = {
    //добавлять странички которые будут в аппе использоваться
    Home: undefined
    Formula: undefined
    
}


export interface IRoute {
    name: keyof TypeRootStackParamList
    component: ComponentType
}