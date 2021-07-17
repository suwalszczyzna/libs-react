import React from 'react';
import PropTypes from 'prop-types';
import { CardTitle } from 'components/atoms/CardTitle/CardTitle';
import { Tag } from 'components/atoms/Tag/Tag';
import { LikeButton } from 'components/atoms/LikeButton/LikeButton';
import { LinkShape } from 'Types';
import {
  DateText,
  LinkCard,
  LinkFavicon,
} from 'components/molecules/LinkItem/LinkItem.styles';
import moment from 'moment';

export const LinkItem = ({
  link: { id, title, tags, date, url, likes = 0 },
}) => {
  return (
    <LinkCard>
      <div>
        <div>
          <LinkFavicon
            src={`https://s2.googleusercontent.com/s2/favicons?sz=128&domain_url=${url}`}
            alt="Category"
          />
          <DateText>{moment(date).format('MMM Do')}</DateText>
        </div>
        <div>
          <CardTitle href={url}>{title}</CardTitle>
          <div>
            {tags.map((tag) => (
              <Tag key={tag} name={tag} />
            ))}
          </div>
        </div>
      </div>
      <LikeButton likes={likes} />
    </LinkCard>
  );
};

LinkItem.propTypes = {
  link: PropTypes.shape(LinkShape),
};
