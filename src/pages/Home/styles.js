import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;

    padding: 0 123px;
    margin-top: 40px;

    overflow-y: auto;
    scrollbar-color: ${({ theme }) => theme.COLORS.PINK} purple;

    > .header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      margin-bottom: 40px;

      > h1 {
        font-size: 32px;
        font-weight: 400;
        line-height: 42px;
      }

      > button {
        width: fit-content;
        align-self: end;
        padding: 16px 32px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Button = styled(Link)`
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  padding: 16px 24px;
  border-radius: 10px;
`;
