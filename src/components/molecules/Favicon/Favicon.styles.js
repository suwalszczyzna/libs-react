import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${({ imgUrl, dark, theme: { colors } }) =>
    !imgUrl && dark ? colors.main : colors.elementBackground};
  background-image: ${(props) => props.imgUrl && `url('${props.imgUrl}')`};
  background-size: cover;
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  box-shadow: ${({ theme }) => theme.misc.mainShadow};
  padding: 8px;

  svg {
    fill: ${({ theme }) => theme.colors.siteBackground};
  }

  img {
    height: 100%;
    width: 100%;
  }
`;
