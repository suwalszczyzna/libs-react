import React from 'react';
import PropTypes from 'prop-types';
import { CardTitle } from 'components/atoms/CardTitle/CardTitle';
import { Tag } from 'components/atoms/Tag/Tag';
import { LinkShape } from 'Types';
import {
  LinkCard,
  LinkFavicon,
} from 'components/molecules/LinkItem/LinkItem.styles';
import moment from 'moment';
import { SmallText } from 'components/atoms/SmallText/SmallText';
import { getBaseUrl } from 'Utils/TextUtils';

const LinkItem = ({ link: { id, title, tags, date, url } }, ref) => {
  return (
    <LinkCard>
      <div ref={ref}>
        <div>
          <LinkFavicon
            src={`https://s2.googleusercontent.com/s2/favicons?sz=128&domain_url=${url}`}
            alt={`Favicon of ${title}`}
          />
          <SmallText>{moment(date).format('MMM Do')}</SmallText>
        </div>
        <div>
          <div>
            <CardTitle href={url}>{title}</CardTitle>
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
