import React from 'react'
import List from './List'
import Header from './Header'
import {connect} from 'react-redux'
import ActionBar from './ActionBar'
class TodoApp extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
            <Header />
            <List />
            <ActionBar />
            </div>
        );
    }
}
export default connect((state)=>{
    return{
        todo:state
    }
})(TodoApp)
