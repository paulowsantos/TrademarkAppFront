import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  max-width: 1200px;
  margin: 150px auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  header {
    display: flex;

    button {
      border: 0;
      background: none;
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }
`;

export const TopSection = styled.header`
  margin-left: 150px;
`;

export const BottomSection = styled.div`
  max-width: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const EmployeeList = styled.ul``;

export const ListHeader = styled.li`
  display: flex;
  margin-top: 20px;

  div:not(:first-child) {
    width: 70px;
    font-size: 14px;
    margin-top: 0px;
    font-weight: 500;
  }

  div:nth-child(2) {
    margin-left: 30px;
  }
  div:nth-child(3) {
    margin-left: 12px;
  }
  div:nth-child(4) {
    margin-left: 12px;
  }
  div:nth-child(5) {
    margin-left: 4px;
  }
  div:nth-child(6) {
    margin-left: 20px;
  }
  div:nth-child(7) {
    margin-left: 20px;
  }
  div:nth-child(8) {
    margin-left: 8px;
  }

  div:first-child {
    min-width: 150px;
    white-space: nowrap;
    font-weight: 500;
    text-align: right;
  }
`;

export const Employee = styled.li`
  margin-top: 20px;
  form {
    display: flex;
    align-items: center;
    justify-content: center;

    div:not(:first-child) {
      width: 70px;
      margin-top: 0px;
      margin-left: 12px;
    }

    div:first-child {
      min-width: 150px;
      white-space: nowrap;
      font-weight: 500;
      text-align: right;
    }

    input {
      color: #fff;
      text-align: center;
    }
  }
`;

export const ButtonProj = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 900px;
  margin-right: 30px;

  button {
    background: #061e5c;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #f7f7f7;
    width: 100%;
    font-weight: 500;
    margin: 24px 30px 0px 50px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#061e5c')};
    }
  }
`;
