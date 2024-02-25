import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;

  height: 116px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  gap: 64px;
  padding: 24px 123px;

  position: relative;
`;

export const Brand = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: start;

  font-size: 24px;
  font-weight: 700;

  color: ${({ theme }) => theme.COLORS.PINK};
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 0 6.4rem;
  flex-grow: 1;
`;

export const Profile = styled(Link)`
  width: fit-content;
  display: flex;
  justify-content: end;
  color: ${({ theme }) => theme.COLORS.WHITE};

  img {
    width: 64px;
    height: 64px;

    border-radius: 50%;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;

    margin-right: 10px;

    font-size: 14px;
    line-height: 18px;
  }
`;

export const Logout = styled.button`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  background: none;
  border: none;

  position: absolute;
  bottom: 30px;
  right: 196px;
`;
