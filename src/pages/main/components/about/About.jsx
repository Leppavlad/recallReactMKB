import React from 'react';
import styled from 'styled-components';

import bgPattern from '../../../../assets/images/pattern_1.jpg';

const AboutSection = styled.div`
  background: url(${bgPattern}) repeat;
  padding: 200px 0;
`;

export const MainAbout = () => {
  return <AboutSection></AboutSection>;
};
