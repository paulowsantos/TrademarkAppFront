import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin: 150px auto;
`;

export const CardsContainer = styled.div`
  max-width: 900px;
  margin: 110px auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  height: 250px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8);
  transition: 0.3s;
  background-color: #061e5c;
  color: #fff;
  border-radius: 10px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.8);
    cursor: pointer;
    background-color: ${darken(0.05, '#061e5c')};
  }

  span {
    font-size: 20px;
    margin: 0px 20px 40px 20px;
    text-align: center;
  }
  svg {
    margin-top: 40px;
  }
`;
