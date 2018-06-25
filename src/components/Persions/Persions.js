import React from 'react';
import Persion from './Persion/Persion';


const persions = (props) =>{
   return props.persions.map((persion,index) =>{
       return <Persion 
              myclick={() =>props.clicked(index)}
              name={persion.name}
              count={persion.count}
              key = {persion.id}
              onChanged={(event)=>props.changed(event,persion.id)}

       />
   })
}

export default persions;