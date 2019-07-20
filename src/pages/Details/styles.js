import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 52px auto;
  margin-bottom: 50px;

  display: flex;
  flex-direction: column;
`;

export const Meetup = styled.div`
  max-width: 940px;

  display: flex;
  flex-direction: column;

  border: 0;
  border-radius: 4px;
  padding: 20px 30px;

  opacity: ${props => (props.past ? 0.6 : 1)};

  header {
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin-bottom: 50px;
    h1 {
      font-size: 32px;
      color: #fff;
    }

    aside {
      display: flex;
      align-content: center;
      align-items: center;
    }
  }

  img {
    max-width: 940px;
    margin-bottom: 25px;
  }

  span {
    line-height: 32px;
    font-size: 18px;
    color: #fff;
    margin-bottom: 30px;
  }

  footer {
    display: flex;
    flex-direction: row;
    > span {
      display: flex;
      flex-direction: row;
      align-items: center;

      color: #fff;
      opacity: 0.6;
      font-size: 16px;
      padding-right: 30px;
      > svg {
        margin-right: 10px;
      }
    }
  }
`;

export const Button = styled.button`
  background: ${props => props.color};
  padding: 12px 20px 11px 20px;
  border: 0;
  border-radius: 4px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-left: 15px;
  height: 42px;

  &:hover {
    background: ${props => darken(0.05, props.color)};
  }
  > svg {
    margin-right: 10px;
  }
`;
