import React from 'react';

import Wrapper from 'components/Wrapper';
import Match from './components/Match';

const Result = () => (
  <Wrapper header="Matches for name">
    <Match />
    <Match />
  </Wrapper>
);

export default Result;
