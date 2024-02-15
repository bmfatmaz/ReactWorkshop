import React from 'react';
export default class Mounting extends React.Component{
    constructor(props){
        super(props);
        console.log("contructeur");
        // state={
        //     likes:10,
        //     value2:1,
        //     value3:{value3:"HI"}
        // }
    }
    static getDrivedStateFromProps(props,state){
        console.log(props.name);
        console.log("getting props and init states")
        return null;
    }
    componentDidMount(){
        console.log("component did mount")
    }
   
    render(){
        return <>
       
         <h1>
           {console.log("rendering")}
        </h1>
       
        </>
    }
}
 