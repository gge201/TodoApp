import React from 'react';
import {connect} from 'react-redux'
import {deleteAllTodo,markAllTodo,unmarkAllTodo} from '../actions/index'
class ActionBar extends React.Component{
    constructor(props){
        super(props)
        this.deleteAllTodo=this.deleteAllTodo.bind(this)
        this.markAllTodo=this.markAllTodo.bind(this)
        this.unmarkAllTodo=this.unmarkAllTodo.bind(this)
    }
    deleteAllTodo(){
        this.props.dispatch(deleteAllTodo())
    }
    markAllTodo(){
        let count=0;
        this.props.todo.map((item)=>{
            if(!item.complete){
                count++
            }
        })
        if(!count){
            alert('No elements to mark')
            return;
        }
        this.props.dispatch(markAllTodo())
    }
    unmarkAllTodo(){
        let count=0;
        this.props.todo.map((item)=>{
            if(item.complete){
                count++
            }
        })
        if(!count){
            alert('No elements to unmark')
            return;
        }
        this.props.dispatch(unmarkAllTodo())
    }
    render(){
        return(
            <div>
                <button 
                disabled={!this.props.todo.length}
                onClick={this.deleteAllTodo} 
                className="button3">Delete All</button>
                <button 
                disabled={!this.props.todo.length}
                onClick={this.markAllTodo} 
                className="button3">Mark All</button>
                <button 
                disabled={!this.props.todo.length}
                onClick={this.unmarkAllTodo} 
                className="button3"> Unmark All</button>
            </div>
        );
    }
}
export default connect((state)=>{
    return{
        todo:state
    }
})(ActionBar)
