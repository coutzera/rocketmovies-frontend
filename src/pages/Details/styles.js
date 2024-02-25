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
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  > .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 20px;

    h1 {
      font-size: 36px;
      font-weight: 500;
      line-height: 48px;
    }

    svg {
      height: 50px;
    }
  }

  > .publish {
    font-family: "Roboto", sans-serif;
    display: flex;
    gap: 8px;

    .author {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 8px;

      img {
        width: 20px;
        height: 20px;

        border-radius: 50%;
      }

      span {
        font-size: 16px;
        line-height: 18px;
      }
    }

    .datetime {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 8px;

      > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }
  }

  > .tags {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }

  > .description {
    text-align: justify;
  }

  .input-wrapper {
    display: flex;
    flex-direction: row;

    gap: 40px;
  }
`;
