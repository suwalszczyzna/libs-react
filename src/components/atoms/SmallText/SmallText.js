import styled from 'styled-components';

export const SmallText = styled.p`
  font-size: ${({ theme }) => theme.fonts.s};
  padding: 3px 0;

  color: ${(props) =>
    props.secondary
      ? ({ theme }) => theme.colors.secondary
      : ({ theme }) => theme.colors.main}
  }
`;
