import styled from 'styled-components/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

interface ContainerProps {
  active?: boolean;
  activeColor?: string;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  flex: 1;
  align-items: center;
  border-bottom-width: ${props => (props.active ? 2 : 0)};
  border-bottom-color: ${props => props.activeColor};
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-top: 5;
  margin-bottom: 5;
`;

interface TextProps {
  color?: string;
  size?: number;
}

export const Text = styled.Text<TextProps>`
  color: ${props => props.color};
  font-size: ${props => props.size};
  margin-bottom: 5;
`;
