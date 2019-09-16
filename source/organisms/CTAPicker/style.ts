import styled from 'styled-components/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Dimensions } from 'react-native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

interface ValueTextProps {
  color?: string;
  size?: number;
}

export const ValueText = styled.Text<ValueTextProps>`
  flex: 1;
  color: ${props => props.color};
  font-size: ${props => props.size};
  font-weight: bold;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: ${props => (props.size || 18) * 1.3};
  font-weight: bold;
`;

const MAX_MODAL_HEIGHT: number = Dimensions.get('window').height * 0.6;
export const ModalContent = styled.ScrollView`
  background: #fff;
  border-radius: 2px;
  padding: 10px;
  max-height: ${MAX_MODAL_HEIGHT};
`;

interface OptionContainerProps {
  last?: boolean;
}

export const OptionContainer = styled.TouchableOpacity<OptionContainerProps>`
  padding: 5px;
  border-bottom-width: ${props => (props.last ? 0 : 1)}px;
  border-bottom-color: #f0f5ff;
`;

interface OptionTextProps {
  color?: string;
  size?: number;
}

export const OptionText = styled.Text<OptionTextProps>`
  color: ${props => props.color};
  font-size: ${props => props.size};
`;
