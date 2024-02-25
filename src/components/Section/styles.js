import styled from "styled-components";

export const Container = styled.section`
  > h2 {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
  }

  .content {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  .fit-content {
    width: fit-content;
    padding: 0 30px;
  }
`;
