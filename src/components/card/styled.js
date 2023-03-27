import styled from 'styled-components';

import { SIZE_X, SIZE_Y } from './constants';

export const SCard = styled.div`
  width: 300px;
  height: 300px;
  display: grid;
  grid-template-columns: repeat(${SIZE_X}, 1fr);
  grid-template-rows: repeat(${SIZE_Y}, 1fr);
`;
