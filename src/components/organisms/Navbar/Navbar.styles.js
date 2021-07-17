import styled from 'styled-components';
import { device } from 'assets/styles/rwd';

export const Wrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.elementBackground};
  height: 60px;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.stroke};
  margin-bottom: 50px;
`;

export const InnerWrapper = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ theme }) => theme.sizes.siteWidth};
  @media only screen and ${device.mobileS} {
    margin: 10px;
  }

  @media only screen and ${device.tablet} {
    // width: ${({ theme }) => theme.sizes.siteWidth};
    margin: 0 auto;
  }
`;

export const Logo = styled.img`
  cursor: pointer;
  transition: filter 0.2s ease-in-out;
  :hover {
    filter: opacity(70%);
  }
`;