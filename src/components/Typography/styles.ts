import styled, { css } from 'styled-components/native';
import { ITypographyProps } from '../../types/components/typography.types';

export const Typography = styled.Text<ITypographyProps>`
  color: #f0efeb;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 1px;
  padding: 5px;

  ${props => props.heading1 && css`
    font-size: 54px;
    font-weight: 700;
  `}

  ${props => props.heading2 && css`
    font-size: 48px;
    font-weight: 600;
  `}

  ${props => props.heading3 && css`
    font-size: 40px;
    font-weight: 500;
  `}

  ${props => props.heading4 && css`
    font-size: 32px;
    font-weight: 400;
  `}
  ${props => props.heading5 && css`
    font-size: 28px;
    font-weight: 300;
  `}

  ${props => props.heading6 && css`
    font-size: 24px;
    font-weight: 300;
  `}

  ${props => props.colorPrimary && css`
    color: #ffd166;
  `}

  ${props => props.colorSecondary && css`
    color: #118ab2;
  `}

  ${props => props.colorSuccess && css`
    color: #06d6a0;
  `}

  ${props => props.colorError && css`
    color: #d62828;
  `}
`