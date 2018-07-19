import React from 'react';

import ShoeItem from './ShoeItem.jsx';

const ShoeList = ({list1, list2, list3}) => {

    return(
      <div className = 'shoes'>
        <table>
          <tr>
          {list1.map((i) =>
            <ShoeItem key={i.id} item={i}/>
          )}
          </tr>
          <tr>
          {list2.map((i) =>
            <ShoeItem key={i.id} item={i}/>
          )}
          </tr>
          <tr>
          {list3.map((i) =>
            <ShoeItem key={i.id} item={i}/>
          )}
          </tr>
        </table>
    </div>);
};

export default ShoeList;
