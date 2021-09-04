import styled from 'styled-components';
import CreatableSelect from 'react-select/creatable';

export const StyledSelect = styled(CreatableSelect)`
  .Select__control {
    height: 40px;
    box-sizing: border-box;
    padding-left: 5px;
    border-radius: ${({ theme }) => theme.sizes.borderRadius};
    border: none;
    box-shadow: ${({ theme }) => theme.misc.mainShadow};

    &--is-focused {
      border: 2px solid ${({ theme }) => theme.colors.accent} !important;
    }
  }

  .Select__placeholder {
    font-size: ${({ theme }) => theme.fonts.s};
    color: ${({ theme }) => theme.colors.main};
  }

  .Select__multi-value {
    background: ${({ theme }) => theme.colors.siteBackground};
    padding: 2px 6px;
    border-radius: 7px;
    cursor: pointer;
    letter-spacing: 0.8px;

    &__label {
      color: ${({ theme }) => theme.colors.secondary};
      font-size: ${({ theme }) => theme.fonts.s};
    }
  }

  .Select__menu {
    padding: 10px 0;
    border-radius: ${({ theme }) => theme.sizes.borderRadius};
    border: none;
    font-size: ${({ theme }) => theme.fonts.s};
  }
`;
