import React from 'react';
import { IContainerProps } from '../../types/components/container.types';
import { Container as View } from './styles'


const Container: React.FC<IContainerProps> = 
({ children, error, success }) => {
  return (
    <View
      error={error}
      success={success}
    >
      {children}
    </View>
  )
}

export { Container };