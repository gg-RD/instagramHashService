import React from 'react';

import ShoeItem from './ShoeItem.jsx';

const ShoeList = ({list}) => {
    //console.log(list, 'list from list');
    return(
      <div className = 'shoes'>
      {list.map((i) =>
        <ShoeItem key={i.id} item={i}/>
      )}
    </div>);
};

export default ShoeList;
