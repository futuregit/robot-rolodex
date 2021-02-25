import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = props => {
    console.log("This is the value of props", props)
    return <div className='card-list'>
         { props.robots.map( robot => 
              <Card key={robot.id} robot={robot} />
            )
          }
    </div>
};

