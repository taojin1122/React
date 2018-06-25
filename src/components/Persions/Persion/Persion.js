
import React from 'react';
import './Persion.css';

const persion = (props) =>{
  return (
    <div className="Persion">
      {/* 属性传事件 */}
      <p onClick={props.myclick}>大家好，我是{props.name}!我有{props.count}个作品</p>
     <p>{props.children}</p>
     <input type="text" onChange={props.onChanged} defaultValue={props.name}/>
    </div>
  )
}

export default persion;