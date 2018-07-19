import React from 'react';

const ShoeItem = ({item}) => {
  console.log(item, 'item from item')
  return(<div className='shoe-item'>
    <img src={item.image_url}/>
    <p>{item.insta_user}</p>
    <p>{item.likes}Likes</p>
  </div>);
};

export default ShoeItem;
