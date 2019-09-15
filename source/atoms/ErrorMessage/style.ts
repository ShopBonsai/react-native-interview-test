import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: ${props => (props.size || 30) / 4};
`;

interface MessageProps {
  color?: string;
  size?: number;
}

export const Message = styled.Text<MessageProps>`
  color: ${props => props.color};
  font-size: ${props => (props.size || 30) / 1.5};
`;
