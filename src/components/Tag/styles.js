import styled from "styled-components";

export const Container = styled.span`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  font-size: 12px;
  font-family: "Roboto", sans-serif;

  color: ${({ theme }) => theme.COLORS.GRAY_100};

  padding: 8px 16px;
  border-radius: 8px;
`;
