import React from 'react';


const Item = props => {
  return <div className={props.item.completed ? "completed" : "item"} onClick={() => props.toggleItem(props.item.id)}>
          {props.item.name}
        </div>
};

export default Item;
