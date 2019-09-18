import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

interface TextProps {
  color?: string;
  size?: number;
}

export const Text = styled.Text<TextProps>`
  color: ${props => props.color};
  font-size: ${props => props.size};
  margin-right: ${props => (props.size || 16) / 2};
`;
