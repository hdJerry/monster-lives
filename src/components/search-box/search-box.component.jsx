import React from 'react';

import './search-box.style.css';

export const Searchbox = props => (

  <div className="search-box-div">
     <input onChange={props.onSearchChange} disabled={props.datas === 0}/>
  </div>

)
