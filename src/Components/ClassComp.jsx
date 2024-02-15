import React from 'react';
export default class ClassComp extends React.Component{
    // constructor(props){
    //     super(props);
        state={
            value1:"HELLO",
            value2:1,
            value3:{value3:"HI"}
        }
    // }
   
    render(){
        return <>
       
         <h1>
            Hello from class {this.props.name}
        </h1>
        <p>My state: {this.state.value3.value3}</p> 
        </>
    }
}
 