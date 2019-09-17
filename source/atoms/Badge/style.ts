import styled from 'styled-components/native';

export const Container = styled.View``;

interface CountContainerProps {
  color?: string;
  size?: number;
}

export const CountContainer = styled.View<CountContainerProps>`
  position: absolute;
  top: -${props => (props.size || 14) / 3};
  right: -${props => (props.size || 14) / 3};
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color};
  height: ${props => (props.size || 14) * 1.3};
  width: ${props => (props.size || 14) * 1.3};
  border-radius: ${props => ((props.size || 14) * 1.3) / 2};
`;

interface CountProps {
  color?: string;
  size?: number;
}

export const Count = styled.Text<CountProps>`
  color: ${props => props.color};
  font-size: ${props => props.size};
`;
