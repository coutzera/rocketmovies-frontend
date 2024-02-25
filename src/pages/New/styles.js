import styled from "styled-components";

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

    > a {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 8px;

      color: ${({ theme }) => theme.COLORS.PINK};

      margin-bottom: 24px;
    }
  }
`;

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 40px;

  .header {
    font-size: 36px;
    font-weight: 500;
    line-height: 47px;
  }

  .input-wrapper {
    display: flex;
    flex-direction: row;

    gap: 40px;
  }

  .invert-color {
    color: ${({ theme }) => theme.COLORS.PINK};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }

  .section-wrapper {
    width: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;

    padding: 16px;
    border-radius: 10px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }
`;
