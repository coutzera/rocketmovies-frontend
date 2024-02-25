import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BaP};

  border: none;
  border-radius: 16px;

  padding: 32px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  > .header {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 8px;

    > h1 {
      text-align: left;

      font-size: 24px;
      font-weight: 700;
      line-height: 32px;

      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  > .description {
    display: flex;
    flex-direction: column;
    gap: 16px;
    text-align: justify;
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    > p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

  > footer {
    width: 100%;
    display: flex;
    gap: 8px;
  }
`;
