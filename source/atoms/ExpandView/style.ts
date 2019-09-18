import styled from 'styled-components/native';

interface ContainerProps {
  center?: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
