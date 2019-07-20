import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;

  margin: 50px auto;

  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 50px;
      padding: 14px 20px;
      color: #fff;
      margin: 0 0 10px;
      font-size: 16px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.1);
      margin: 20px 0 19px;
    }

    span {
      margin-top: 20px;
      align-self: flex-end;
      button {
        background: #f94d6a;

        padding: 12px 20px 11px 20px;
        border: 0;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        width: 170px;

        &:hover {
          background: ${darken(0.03, '#F94D6A')};
        }

        svg {
          margin-right: 10px;
        }
      }
    }
  }
`;
