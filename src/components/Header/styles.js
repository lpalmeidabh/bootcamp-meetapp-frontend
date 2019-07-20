import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #000;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 92px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      width: 31px;
      height: 32px;
    }
  }

  aside {
    display: flex;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  div {
    text-align: right;
    margin-right: 30px;

    strong {
      font-size: 14px;
      display: block;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 4px;
      font-size: 14px;
      color: #999;
    }
  }
  button {
    border: 0;
    background: #d44059;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    height: 42px;
    width: 71px;
    border-radius: 4px;

    &:hover {
      background: ${darken(0.03, '#D44059')};
    }
  }
`;
