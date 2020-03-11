import React from 'react';

import './card.style.css';

export const Card = props => (



  <div className="card">
    <img
      alt="Monster"
      src={`https://robohash.org/${props.monster.id}?set=set2`}
    />

  <h3> { props.monster.name } </h3>
  <p> { props.monster.email }</p>

  </div>
)
