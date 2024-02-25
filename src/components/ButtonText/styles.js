import styled from "styled-components";

export const Container = styled.button`
  background: none;
  color: ${({ theme }) => theme.COLORS.PINK};

  border: none;

  font-size: 16px;
  margin-bottom: 24px;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
`;
