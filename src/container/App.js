import React, { Component } from 'react';

import './App.css';
import Persions from '../components/Persions/Persions';
import MyHeader from '../components/Header/Header';

//state 必须使用在类中，类必须继承自Component
class App extends Component {
  //state：是用于改变组件内的状态值
  //props：用于组件通信的传值
   state={
     persions:[
       {id:1,name:"米斯特无",count:50},
       {id:2,name:"Heri",count:13},
       {id:3,name:"Tom",count:20}
     ],
     otherSate:"anything",
     showView:false

   }

   switchNameHandler = (newName) =>{
     
     this.setState({
       persions:[
        {name:newName,count:50},
        {name:"Heri",count:4556},
        {name:"Tom",count:20}
       ]
     })
   }
    nameChangeHandler = (event,id) =>{
      //查找更改对象的index
      const persionIndex = this.state.persions.findIndex(p =>{
         return  p.id === id;
      })
       //修改内容的对象
       const persion = {
         ...this.state.persions[persionIndex]
       }

       console.log(event)
       // 将修改的值，赋值给persion
       persion.name = event.target.value;
       //获取状态数据
       const persions =[...this.state.persions];
       //将修改过后的值，赋值给persions
       persions[persionIndex] = persion;
      this.setState({

        persions:persions
        // persions:[
        //   //target默认对象
        //   {name:event.target.value,count:50},
        //   {name:"Heri",count:4556},
        //   {name:"Tom",count:20}
        // ]
      })
    }

    showViewHandler = () =>{
      const doesShow = this.state.showView;
       this.setState({
            showView:!doesShow
       })
    }
   //删除内容
    deletePersionHandler = (persionIndex) =>{
       //const persions = this.state.persions;
       //使用操作运算符，方便后面添加数据
       const persions = [...this.state.persions];
       persions.splice(persionIndex,1);
       this.setState (
         {
           persions : persions
         }
       ) 
    }
  render() {
    const style={
      backgroundColor:'green',
      color:"white",
      font:'inherit',
      border:'1px solid red',
      padding:'8px',
      cursor:'pointer'
    }
    //切换内容的代码优化，将里面冗余代码提取出来
    let persion = null;
    if(this.state.showView){

     persion = <Persions  
     persions={this.state.persions}
     clicked ={this.deletePersionHandler}
     changed={this.nameChangeHandler}/>

    //  (
    //   <div>
    //     {
    //       this.state.persions.map((persion,index) =>{
    //         return <Persion 
    //         onChanged = {(event) => this.nameChangeHandler(event,persion.id)}
    //          myclick = {() =>this.deletePersionHandler(index)}
    //          key = {persion.id}
    //         name={persion.name} 
    //         count={persion.count}/>
    //       })
        // }
      {/* <Persion 
              onChanged={this.nameChangeHandler}
      name={this.state.persions[0].name} 
          count={this.state.persions[0].count}/>
 <Persion 
//  属性传事件
 myclick={this.switchNameHandler.bind(this,"米修")}
 name={this.state.persions[1].name} 
          count={this.state.persions[1].count}/>
 <Persion name={this.state.persions[2].name} 
          count={this.state.persions[2].count}>非常感谢大家支持我们的课程！</Persion> */}

  //  </div>
    // )
     style.backgroundColor="red";
    }
   
    //动态添加类名 join() 方法将数组转换为字符串
    
   //const classes =["red","bold"].join(" "); //class="red bold"
    
    const classes = [];

    if(this.state.persions.length<=2){
       classes.push("red");//class=["red"]
    }
    
    if(this.state.persions.length<=1){
      classes.push("bold");//class=["red","bold"]
    }
    /*
     onClick:单击事件，this调用。
    */
    return (
      <div className="App">
      
        {/* <h1>Hello World</h1>
         <p className={classes.join(" ")}>Hello, react app</p> */}
         
          {/*第一种事件属性传值的方式：
           <button onClick={()=>this.switchNameHandler("米修")}>更改状态值</button>  */}
        {/* <button style={style}onClick={this.switchNameHandler.bind(this,"misu")}>更改状态值</button> */}
        {/* <button style={style} onClick={this.showViewHandler}>切换内容</button> */}
         <MyHeader />
        {persion}
         {/* {this.state.showView?
           <div>
              <Persion 
           onChanged={this.nameChangeHandler}
         name={this.state.persions[0].name} 
                  count={this.state.persions[0].count}/>
         <Persion 
        //  属性传事件
         myclick={this.switchNameHandler.bind(this,"米修")}
         name={this.state.persions[1].name} 
                  count={this.state.persions[1].count}/>
         <Persion name={this.state.persions[2].name} 
                  count={this.state.persions[2].count}>非常感谢大家支持我们的课程！</Persion>

           </div>:null

         } */}
        </div>
    );
  }
}

export default App;
