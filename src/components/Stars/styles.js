import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  line-height: 0;
  list-style: none;

  .bg > svg {
    fill: ${({ theme }) => theme.COLORS.PINK};
  }

  > li > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;
