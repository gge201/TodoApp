import React from 'react'
import Item from './Item'
import {connect} from 'react-redux'
class List extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>{this.props.todo.length?this.props.todo.map((item,pos)=>{ 
                return (<Item 
                                key={item.text} 
                                text={item.text} 
                                pos={pos}/>)
                })
                :<p></p>}
            </div>
        );
    }
};
export default connect((state)=>{
    return{
        todo:state
    };
})(List)
