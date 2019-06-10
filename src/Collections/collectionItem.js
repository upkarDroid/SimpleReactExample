import React from "react";

export default renderCollection = (item, clickHandler) => {
  return (
      <div className='collection' 
          key={item.id} onClick={clickHandler} 
          style={{ backgroundImage: `url(${item.image})` }}
      >
          <div className='mask'>
              <div className='collection__meta'>
                  <span className='collection__title'>{item.title}</span>
                  <span className='collection__desc'>{item.description}</span>
                  <span className='collection__count'>{item.num_places}{' '}Places</span>
              </div>
          </div>
      </div>);
}
