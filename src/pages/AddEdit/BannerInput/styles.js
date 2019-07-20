import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 20px;
  height: 300px;
  width: 940px;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }

    img {
      max-height: 300px;
      max-width: 940px;
      border-radius: 4px;
      border: 0;
    }

    input {
      display: none;
    }
  }
`;
