import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.elementBackground};
  background-image: ${(props) => props.imgUrl && `url('${props.imgUrl}')`};
  background-size: 100%;
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  box-shadow: ${({ theme }) => theme.misc.mainShadow};
  margin-left: 10px;
  padding: 8px;

  svg {
    fill: ${({ theme }) => theme.colors.siteBackground};
  }

  img {
    height: 100%;
    width: 100%;
  }
`;

export const Favicon = ({ imgUrl }) => {
  return (
    <Wrapper imgUrl={imgUrl}>
      {!imgUrl && (
        <svg
          width="31"
          height="31"
          viewBox="0 0 31 31"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3.81099 23.7066C5.66044 22.8659 7.67802 22.3055 9.80769 21.9132C9.41538 20.1198 9.19121 18.2703 9.13516 16.3648H0C0.168132 19.2791 1.12088 21.9132 2.69011 24.1549L3.81099 23.7066Z" />
          <path d="M4.53956 25.5L3.86704 25.7802C6.33297 28.5824 9.8077 30.4319 13.6747 30.8802L13.5066 30.656C12.1055 28.7505 10.9846 26.3967 10.256 23.8187C8.18242 24.1549 6.27693 24.7154 4.53956 25.5Z" />
          <path d="M10.2 7.17363C10.8725 4.76374 11.8813 2.52198 13.1703 0.672527L13.6747 0C9.75166 0.448352 6.33297 2.35385 3.81099 5.15604L4.42748 5.43626C6.22088 6.22088 8.18242 6.83736 10.2 7.17363Z" />
          <path d="M9.75165 9.02308C7.56593 8.63077 5.54835 8.01429 3.64286 7.17363L2.63407 6.72528C1.12088 8.96703 0.168132 11.6571 0 14.5154H9.13516C9.19121 12.6099 9.35934 10.7604 9.75165 9.02308Z" />
          <path d="M26.9011 25.9484L26.5088 25.6681C24.6033 24.7714 22.4736 24.1549 20.2319 23.7626C19.5033 26.3407 18.3824 28.6945 16.9813 30.6L16.7571 30.9363C20.7923 30.6 24.3231 28.7506 26.9011 25.9484Z" />
          <path d="M26.5648 5.26813L27.0132 5.04396C24.4352 2.18571 20.8484 0.336264 16.8132 0L17.3176 0.728571C18.6066 2.57802 19.5593 4.81978 20.2879 7.22967C22.5297 6.83736 24.6593 6.16483 26.5648 5.26813Z" />
          <path d="M10.9846 14.4593H19.4473C19.3912 12.6659 19.167 10.9286 18.8308 9.30329C17.6538 9.41538 16.4769 9.52747 15.3 9.52747C14.067 9.52747 12.8341 9.47143 11.6571 9.30329C11.2648 10.9286 11.0407 12.722 10.9846 14.4593Z" />
          <path d="M28.1901 6.5011L27.4055 6.94945C25.3879 7.9022 23.0901 8.63077 20.7363 9.02307C21.1286 10.7604 21.2967 12.6099 21.3527 14.4593H30.9923C30.8242 11.5451 29.8154 8.7989 28.1901 6.5011Z" />
          <path d="M27.4615 24.0429L28.1341 24.4912C29.8154 22.1934 30.8242 19.3912 30.9923 16.4209H21.3527C21.2967 18.3264 21.0725 20.1758 20.6802 21.9692C23.0901 22.3615 25.3319 23.0901 27.3495 24.0429H27.4615Z" />
          <path d="M15.244 1.06484L14.6835 1.79341C13.5626 3.36264 12.722 5.32418 12.1055 7.45385C13.1703 7.56594 14.2352 7.62198 15.3 7.62198C16.3648 7.62198 17.3736 7.56594 18.3824 7.45385C17.7659 5.32418 16.8692 3.36264 15.7484 1.73736L15.244 1.06484Z" />
          <path d="M15.2439 29.8154L15.4681 29.5352C16.7011 27.8538 17.6538 25.7802 18.3264 23.5385C17.3176 23.4264 16.3088 23.3703 15.3 23.3703C14.2352 23.3703 13.1703 23.4264 12.1615 23.5385C12.8341 25.7802 13.7868 27.8538 15.0198 29.4791L15.2439 29.8154Z" />
          <path d="M15.3 21.4648C16.4769 21.4648 17.6538 21.5209 18.8308 21.689C19.2231 20.0077 19.3912 18.2143 19.4473 16.4209H10.9846C11.0407 18.2703 11.2648 20.0077 11.6011 21.689C12.8341 21.5209 14.067 21.4648 15.3 21.4648Z" />
        </svg>
      )}
    </Wrapper>
  );
};

Favicon.propTypes = {};
