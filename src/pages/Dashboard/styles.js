import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 52px auto;
  margin-bottom: 50px;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-content: center;

    h1 {
      font-size: 32px;
      color: #fff;
    }

    button {
      background: #f94d6a;
      padding: 12px 20px 11px 20px;
      border: 0;
      border-radius: 4px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      color: #fff;
      font-size: 16px;
      font-weight: bold;

      &:hover {
        background: ${darken(0.03, '#F94D6A')};
      }

      svg {
        margin-right: 10px;
      }
    }
  }

  ul {
    display: grid;
    grid-gap: 10px;
    margin-top: 50px;
  }
`;

export const Meetup = styled.li`
  max-width: 940px;
  background: rgba(0, 0, 0, ${props => (props.past ? 0.1 : 0.2)});

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;
  border: 0;
  border-radius: 4px;
  padding: 20px 30px;

  strong {
    font-size: 18px;
    color: #fff;
  }

  aside {
    display: flex;
    align-content: center;
    align-items: center;
    span {
      font-size: 16px;
      color: #fff;
      padding-right: 30px;
    }
  }
`;
