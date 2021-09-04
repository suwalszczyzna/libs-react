import styled from 'styled-components';
import { SmallText } from 'components/atoms/SmallText/SmallText';

export const LinkCard = styled.div`
  width: auto;
  min-height: 100px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.elementBackground};
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.stroke};
  box-shadow: ${({ theme }) => theme.misc.mainShadow};
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: ${({ theme }) => theme.misc.hoverShadow};
  }

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
