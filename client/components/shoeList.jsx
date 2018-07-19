import React from 'react';

import shoeItem from './shoeItem.jsx';

const shoeList = ({list}) => {
    return(
      <div className = 'shoes'>
      {list.map((i) =>
        <shoeItem key={i.id} item={i}/>
      )}
    </div>);
};

export default shoeList;
