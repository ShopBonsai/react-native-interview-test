import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.ScrollView`
  flex: 1;
  padding: 10px;
  padding-top: 25px;
`;

export const Extra = styled.View`
  padding: 0 10px;
  margin-bottom: 10px;
`;

export const TotalContainer = styled.View`
  flex-direction: row;
`;

interface TotalLabelProps {
  color?: string;
  size?: number;
}

export const TotalLabel = styled.Text<TotalLabelProps>`
  color: ${props => props.color};
  font-size: ${props => props.size};
  font-weight: bold;
`;

interface TotalFillerProps {
  color?: string;
}

// TODO: Fix double border width. Currently border-bottom-width
// is not yet supported when border-style is setted to dotted
export const TotalFiller = styled.View<TotalFillerProps>`
  flex: 1;
  align-self: flex-end;
  border-style: dotted;
  border-width: 1px;
  border-radius: 1;
  border-color: ${props => props.color};
`;

interface TotalAmountProps {
  color?: string;
  size?: number;
}

export const TotalAmount = styled.Text<TotalAmountProps>`
  color: ${props => props.color};
  font-size: ${props => props.size};
  font-weight: bold;
`;
