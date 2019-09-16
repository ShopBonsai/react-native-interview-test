import styled from 'styled-components/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export const LabelContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 5px 0;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: ${props => (props.size || 18) * 1.3};
  margin-right: ${props => (props.size || 18) / 3};
`;

interface AmountProps {
  color?: string;
  size?: number;
}

export const Amount = styled.Text<AmountProps>`
  color: ${props => props.color};
  font-size: ${props => props.size};
`;

interface FillerProps {
  color?: string;
}

// TODO: Fix double border width. Currently border-bottom-width
// is not yet supported when border-style is setted to dotted
export const Filler = styled.View<FillerProps>`
  flex: 1;
  align-self: flex-end;
  border-style: dotted;
  border-width: 1px;
  border-radius: 1;
  border-color: ${props => props.color};
`;

interface PriceProps {
  color?: string;
  size?: number;
}

export const Price = styled.Text<PriceProps>`
  color: ${props => props.color};
  font-size: ${props => (props.size || 18) * 1.1};
  font-weight: bold;
`;
