
import React from 'react';

import { Card } from '../card/card.component.jsx';

import './card-list.style.css';


export const CardList = props =>(

    <div className="card-div">


    {
      props.monsters.map(monster => (
        <Card key={ monster.id } monster={ monster } />
      ))
    }

    </div>
)
