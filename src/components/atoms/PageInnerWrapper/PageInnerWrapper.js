import styled from 'styled-components';
import { SectionTitle } from 'components/atoms/SectionTitle/SectionTitle';

export const PageInnerWrapper = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }

  ${SectionTitle} {
    margin-bottom: 50px;
  }
`;
