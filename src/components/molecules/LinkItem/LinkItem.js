import React from 'react';
import PropTypes from 'prop-types';
import { CardTitle } from 'components/atoms/CardTitle/CardTitle';
import { Tag } from 'components/atoms/Tag/Tag';
import { LinkShape } from 'Types';
import { LinkCard } from 'components/molecules/LinkItem/LinkItem.styles';
import { SmallText } from 'components/atoms/SmallText/SmallText';
import { getBaseUrl } from 'Utils/TextUtils';
import { getFormattedData } from 'Utils/DateUtils';
import { Favicon } from 'components/molecules/Favicon/Favicon';

const LinkItem = (
  { link: { id, title, tags, createdAt, url, favicon } },
  ref
) => {
  return (
    <LinkCard>
      <div ref={ref}>
        <div>
          <Favicon imgUrl={favicon} dark />
          <SmallText>{getFormattedData(createdAt, 'MMM DD')}</SmallText>
        </div>
        <div>
          <div>
            <CardTitle target="_blank" rel="noopener noreferrer" href={url}>
              {title}
            </CardTitle>
            <SmallText secondary>{getBaseUrl(url)}</SmallText>
          </div>
          <div>
            {tags.map((tag) => (
              <Tag key={tag} name={tag} />
            ))}
          </div>
        </div>
      </div>
    </LinkCard>
  );
};
export default React.forwardRef(LinkItem);

LinkItem.propTypes = {
  link: PropTypes.shape(LinkShape),
};
