import React from 'react'
import {connect} from 'react-redux'
import {deleteTodo,editTodo,upTodo,downTodo,toggleTodo} from '../actions/index'
class Item extends React.Component{
    constructor(props){
        super(props);
        this.onDelete=this.onDelete.bind(this);
        this.handleEditContent=this.handleEditContent.bind(this);
        this.upTodo=this.upTodo.bind(this)
        this.downTodo=this.downTodo.bind(this)
    }
    onDelete(e){
        this.props.dispatch(deleteTodo(this.props.text))
    }
    upTodo(){
        this.props.dispatch(upTodo(this.props.text,this.props.pos))
    }
    downTodo(){
        this.props.dispatch(downTodo(this.props.text,this.props.pos))
    }
    handleEditContent(e){
        if(e.key==='Enter')
        {
            e.preventDefault();
            if(e.target.innerText===''){
                alert('Enter Something please')
                return;
            }
            this.props.dispatch(editTodo(this.props.text,e.target.innerText))
            e.target.contentEditable=false;
            e.target.contentEditable=true;
            e.target.value='';
        }
    }
    render(){
        let index;
        this.props.todo.map((item,pos)=>{
            if(item.text===this.props.text)
                index=pos
        })
        return(
            <div>
                <li className="LI">
                    <input type="checkBox" className="check" checked={this.props.todo[index].complete}  onChange={()=>{
                        this.props.dispatch(toggleTodo(this.props.todo[index].text))
                    }}/>
                    <span onKeyDown={this.handleEditContent} className= {(!this.props.todo[index].complete) ? "editable": "non-editable"} contentEditable={!this.props.todo[index].complete} > {this.props.todo[index].text}</span>
                    <button className='fa fa-arrow-up' onClick={this.upTodo}/>
                    <button className='fa fa-arrow-down' onClick={this.downTodo}></button>
                    <button className="fa fa-trash" onClick={this.onDelete}>  </button>
                    
                </li>
            </div>
        );
    }
}
export default connect((state)=>{
    return{
        todo:state
    }
})(Item)