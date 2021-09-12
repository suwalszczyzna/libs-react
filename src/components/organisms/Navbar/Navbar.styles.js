import styled from 'styled-components';
import { device } from 'assets/styles/rwd';

export const Wrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.main};
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.stroke};
  @media only screen and ${device.mobileS} {
    margin-bottom: 10px;
  }
  @media only screen and ${device.tablet} {
    margin-bottom: 30px;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ theme }) => theme.sizes.siteWidth};

  h1 {
    font-size: ${({ theme }) => theme.fonts.xxl};
    color: ${({ theme }) => theme.colors.white};
  }

  @media only screen and ${device.mobileS} {
    margin: 10px;
    padding: 5px;
  }

  @media only screen and ${device.tablet} {
    margin: 0 auto;
    padding: 25px 0;
  }
`;

export const Logo = styled.img`
  cursor: pointer;
  transition: filter 0.2s ease-in-out;

  :hover {
    filter: opacity(70%);
  }
`;
