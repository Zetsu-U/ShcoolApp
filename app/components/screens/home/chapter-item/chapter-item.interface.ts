import { Image } from "react-native-reanimated/lib/typescript/Animated"
import { IForumulaProps } from "../../formula/formula-item/formula-item.inteface"
import { ViewProps } from "react-native"

export interface IChapterProps {
    title: string
    desc?: string
    image: string
    formulas?: IForumulaProps []
    chapters?: IChapterProps []
}

export type TypeChapterItemProps = IChapterProps & ViewProps

export interface IChapterItem extends TypeChapterItemProps{
    color: string
    isLarge: boolean
}