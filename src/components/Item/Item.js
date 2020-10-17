import React from 'react';
import './Item.css';

class Item extends React.Component {

  render() {
    return (
      <div className='item'>
        <div className='item__border item__border_blue'>
          <div className="item__content">
            <div className='item__imgCat'>
              <div className='item__description'>
                <div className='item__title'>Сказочное заморское явство</div>
                <div className='item__name'>Нямушка</div>
                <div className='item__taste'>с фуа-гра</div>
                <div className='item__portions'>10 порций<br />
                мышь в подарок</div>
              </div>
              <div className='item__weightCircle item__weightCircle_blue'>
                <div className='item__weight'>0,5</div>
                <div className='item__kg'>кг</div>
              </div>
            </div>
          </div>
        </div>
        <div className='item__label'>
        Чего сидишь? Порадуй котэ, <a href='/'>купи</a>
        </div>
      </div>
    );
  }
}

export default Item;
