import styled from 'styled-components';
import { lighten } from 'polished';

export const Wrapper = styled.div`
  height: 100vh;
  overflow: auto;
  background: linear-gradient(180deg, ${lighten(0.3, '#53585a')}, #f7f7f7);
`;
