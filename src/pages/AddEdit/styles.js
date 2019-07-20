import styled from 'styled-components';
import { darken } from 'polished';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const DTPicker = styled(DatePicker)`
  min-width: 300px;
`;

export const Container = styled.div`
  max-width: 940px;
  margin: 52px auto;
  margin-bottom: 50px;

  display: flex;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 50px;
      font-size: 18px;

      margin-bottom: 10px;
      padding: 14px 20px;
      color: #fff;
    }

    textarea {
      height: 200px;
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;

      font-size: 18px;

      margin-bottom: 10px;
      padding: 14px 20px;
      resize: none;
      color: #fff;
    }
    span {
      margin-top: 20px;
      align-self: flex-end;
      button {
        float: right;
        width: 182px;
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
  }
`;
