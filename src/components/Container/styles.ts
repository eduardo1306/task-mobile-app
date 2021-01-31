import styled, { css } from 'styled-components/native';
import { IContainerProps } from '../../types/components/container.types';

export const Container = styled.View<IContainerProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #003049;
  
  ${props => props.success && css`
    background-color: #06d6a0;
  `};

  ${props => props.error && css`
    background-color: #d62828;
  `};
`;