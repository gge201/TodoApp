import React from 'react'
import {toggleTodo,check} from '../actions/index'
import {connect} from 'react-redux'
class Checkbox extends React.Component{
    constructor(props){
        super(props)
        this.checkBox=this.checkBox.bind(this)
    }
    checkBox=function(e){
        this.props.dispatch(toggleTodo(this.props.text))
    }
    render(){
        return(
            <div>
                <input type="checkbox" checked={this.props.dispatch(check(this.props.complete))} className={this.props.complete ? "":"checked"} onClick={this.checkBox}/>
            </div>
        )
    }
}
export default connect()(Checkbox)
