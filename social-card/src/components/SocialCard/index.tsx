import './index.scss';
import React from 'react';
import * as faker from 'faker';

interface Props {
  imageUrl?: string;
  heading: string;
  description: string;
  footer: string;
  user?: {
    name: string;
    handle: string;
  };
  counts?: {
    comments?: number;
    likes?: number;
    dislikes?: number;
  };
}

const defaultProps: Props = {
  imageUrl:
    'https://depedcaloocan.com/wp-content/uploads/2021/01/placeholder.png',
  heading: faker.company.companyName(),
  description: faker.company.catchPhrase(),
  footer: faker.company.catchPhraseAdjective(),
  user: {
    name: faker.name.findName(),
    handle: faker.internet.userName(),
  },
};

const SocialCard = (props: Props) => {
  return (
    <div className="container">
      <img src={props.imageUrl} alt="" />
      <h3>{props.heading}</h3>
      <p>{props.description}</p>
      <span className="container__footer">{props.footer}</span>
    </div>
  );
};

SocialCard.defaultProps = defaultProps;
export default React.memo(SocialCard);
