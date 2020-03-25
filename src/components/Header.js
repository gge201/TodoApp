import React from 'react'
import {addTodo} from '../actions//index'
import {connect} from 'react-redux'
export class Header extends React.Component{
    constructor(props){
        super(props);
        this.addTodo=this.addTodo.bind(this)
    }
    addTodo(e){
        let i=0;
        e.preventDefault();
        this.props.todo.map((item)=>{
            if(item.text===e.target.elements.element.value){
                alert('Already exists. Add something else')
                i=1;
                e.target.elements.element.value='';
                return;
            }
        })
        if(i || e.target.elements.element.value===''){
            return;
        }
        this.props.dispatch(addTodo(e.target.elements.element.value))
        e.target.elements.element.value='';
    }
    render(){
        return(
            <div>
                <form onSubmit={this.addTodo}>
                    <input 
                    type="text"
                    className="giveInput" 
                    placeholder="Add Something" 
                    name="element">
                    </input>
                    <button 
                    className="button3">
                        +
                    </button>
                </form>
            </div>
        );
    }
}
export default connect((state)=>{
    return{
        todo:state
    }
})(Header)
