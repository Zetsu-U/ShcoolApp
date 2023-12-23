import { IButton } from '../../../ui/buttons/button.interface'


export interface IForumulaProps {
    title: string
    image: string
    properties?: string[]
}

export type TypeIForumulaProps = IForumulaProps & IButton

export interface IForumulaItem extends TypeIForumulaProps {}