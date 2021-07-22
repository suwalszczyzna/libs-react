import styled from 'styled-components';
import { SmallText } from 'components/atoms/SmallText/SmallText';

export const LinkCard = styled.div`
  width: 100%;
  min-height: 100px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.elementBackground};
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(175, 186, 189, 0.25);
  transition: all 0.2s ease-in-out;

  & > div:first-child {
    display: flex;

    & > div:first-child {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      margin-right: 10px;
      height: 100%;
      text-align: center;

      ${SmallText} {
        margin-top: 5px;
      }
    }

    & > div:last-child {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;

export const LinkFavicon = styled.img`
  width: 47px;
  border-radius: 10px;
`;
