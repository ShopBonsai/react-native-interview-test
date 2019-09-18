import styled from 'styled-components/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-bottom: 10;
`;

interface TextProps {
  color?: string;
  size?: number;
}

export const Text = styled.Text<TextProps>`
  color: ${props => props.color};
  font-size: ${props => (props.size || 35) / 2};
`;
