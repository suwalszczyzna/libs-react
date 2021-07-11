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
      margin-right: 25px;
      width: 50px;
      height: 100%;
    }

    & > div:last-child {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;

export const StyledImg = styled.img`
  width: 23px;
`;

export const DateText = styled.p`
  font-size: ${({ theme }) => theme.fonts.m};
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: 7px;
`;
