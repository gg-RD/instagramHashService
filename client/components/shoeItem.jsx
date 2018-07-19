import React from 'react';

const shoeItem = ({item}) => {
  <div className='shoe-item'>
    <img src={item.image_url}/>
    <p>{item.insta_user}</p>
    <p>{item.likes}Likes</p>
  </div>
};

export default shoeItem;
