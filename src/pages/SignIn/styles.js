import styled from "styled-components";
import backgroundImg from "../../assets/backgroundLogin.png";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 134px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 48px;
    font-weight: 700;
    line-height: 63px;
    letter-spacing: 0em;

    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    margin-bottom: 40px;

    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  > h2 {
    margin-bottom: 48px;
  }

  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    margin-bottom: 24px;
  }

  a {
    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  opacity: 0.3;
`;
