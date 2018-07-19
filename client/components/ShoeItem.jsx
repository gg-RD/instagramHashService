import React from 'react';

const ShoeItem = ({item}) => {
  console.log(item, 'item from item')
  console.log(item.image_url);
  return(<td className='shoe-item'>
    <img src={item.image_url} className='image_shoe'/>
    <p className='insta_user'>{item.insta_user}</p>
    <p className='likes'>{item.likes} Likes</p>
  </td>);
};

export default ShoeItem;
