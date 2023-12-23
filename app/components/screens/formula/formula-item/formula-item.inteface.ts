import { ViewProps } from 'react-native'
import { IButton } from '../../../ui/buttons/button.interface'


export interface IForumulaProps {
    title: string
    image: string
    properties?: string[]
}

export type TypeIForumulaProps = IForumulaProps & ViewProps

export interface IForumulaItem extends TypeIForumulaProps {}