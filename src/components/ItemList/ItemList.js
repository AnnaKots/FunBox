import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

class ItemList extends React.Component {

  render() {
    return (
      <div>
        <Item />
        <Item />
        <Item />
      </div>
    );
  }
}

export default ItemList;
