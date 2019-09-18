import React from 'react';

import { Container } from './style';

export interface Props {
  center?: boolean;
}

const ExpandView: React.FC<Props> = ({ center, children }) => {
  return <Container center={center}>{children}</Container>;
};

ExpandView.defaultProps = {
  center: true,
};

export default ExpandView;
