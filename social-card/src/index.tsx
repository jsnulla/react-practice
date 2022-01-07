import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as faker from 'faker';
import SocialCard from './components/SocialCard';
import reportWebVitals from './reportWebVitals';

const renderCards = () => {
  return [...Array(3)].map((_, idx) => {
    return (
      <SocialCard
        key={`card-${idx}`}
        imageUrl={`https://placeimg.com/256/128/nature?${idx}`} // add index to randomize
        heading={faker.company.companyName()}
        description={faker.company.catchPhrase()}
        footer={faker.internet.domainName()}
      />
    );
  });
};

ReactDOM.render(
  <React.StrictMode>{renderCards()}</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
