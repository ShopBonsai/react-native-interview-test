import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';

interface ContainerProps {
  color?: string;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
  background-color: ${props => props.color};
  padding: 15px 0;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: ${props => (props.size || 20) * 1.4};
  margin-right: ${props => (props.size || 20) / 2};
`;

interface TextProps {
  color?: string;
  size?: number;
}

export const Text = styled.Text<TextProps>`
  color: ${props => props.color};
  font-size: ${props => props.size};
  font-weight: bold;
`;
