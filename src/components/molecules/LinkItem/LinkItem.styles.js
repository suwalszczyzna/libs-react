import styled from 'styled-components';

export const LinkCard = styled.div`
  width: 100%;
  min-height: 75px;
  padding: 14px 25px;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.elementBackground};
  border-radius: 7px;
  box-shadow: 0 1px 2px -1px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.2s ease-in-out;

  & > div:first-child {
    display: flex;

    & > div:first-child {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: 5px;
      width: 55px;
      height: 100%;
      text-align: center;
    }

    & > div:last-child {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
  }
`;

export const LinkFavicon = styled.img`
  width: 50px;
  border-radius: 10px;
`;

export const DateText = styled.p`
  font-size: ${({ theme }) => theme.fonts.m};
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: 7px;
`;
