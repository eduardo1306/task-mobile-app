import React from 'react';
import { Typography as Text } from './styles';
import { ITypographyProps } from '../../types/components/typography.types';


const Typography: React.FC<ITypographyProps> = ({ 
  children,
  colorError,
  colorPrimary,
  colorSecondary,
  colorSuccess,
  heading1,
  heading2,
  heading3,
  heading4,
  heading5,
  heading6 
}) => {
  return (
    <>
      <Text
        colorError={colorError}
        colorPrimary={colorPrimary}
        colorSecondary={colorSecondary}
        colorSuccess={colorSuccess}
        heading1={heading1}
        heading2={heading2}
        heading3={heading3}
        heading4={heading4}
        heading5={heading5}
        heading6={heading6}
      >{children}</Text>
    </>
  )
}

export { Typography };