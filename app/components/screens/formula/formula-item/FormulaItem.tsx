import React, { FC } from 'react'
import { IForumulaItem } from './formula-item.inteface'
import { View, Text } from 'react-native'
import Button from '../../../ui/buttons/Button'


const FormulaItem: FC<IForumulaItem> = ({title, image, properties, className, ...rest}) => {
  return (
	<Button {...rest}>
		<Text>{title}</Text>
	</Button>
  )
}

export default FormulaItem