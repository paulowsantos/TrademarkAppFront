import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  background: ${lighten(0.3, '#53585a')};
  width: 100%;
  padding: 0 30px;
  position: fixed;
`;

export const Headerc = styled.header`
  padding: 10px 0;
  background: ${lighten(0.3, '#53585a')};
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  a > img {
    height: 80px;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: #fff;
      width: 28px;
      height: 28px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #f4ede8;
    }

    strong {
      color: #902829;
    }
  }
`;
