import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 100%;
  height: 56px;
  padding: 16px;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  border-radius: 10px;
  border: 0;

  font-weight: 500;
  font-size: 16px;

  &:disabled {
    opacity: 0.5;
  }
`;
