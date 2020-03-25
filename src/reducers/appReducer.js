import {loadState} from '../localStorage'
const appReducer=(state=loadState()?loadState():[],action)=>{
    switch(action.type){
        case 'ADD_ITEM':
            return [...state,{
                text:action.text,
                complete:false
            }]
        case 'DELETE_ITEM':
            state.map((item,pos)=>{
                console.log(action,item)
                if(item.text===action.text)
                {
                    state.splice(pos,1)
                }
            })
            return[...state]
        case 'EDIT_ITEM':
            state.map((item)=>{
                console.log(action)
                if(item.text===action.text){
                    item.text=action.updateText
                }
            })
            return [...state]
        case 'TOGGLE_ITEM':
            state.filter((item)=>{
                if(item.text===action.text){
                    item.complete=!item.complete;
                }
            })
            return [...state]
        case 'MOVE_UP':
            if(action.index===0){
                let element=state[state.length-1]
                state[state.length-1]=state[action.index]
                state[action.index]=element
                
            }
            else{
                let element=state[action.index-1]
                state[action.index-1]=state[action.index]
                state[action.index]=element
            }
            return [...state]

        case 'MOVE_DOWN':
            if(action.index === state.length-1){
                let element=state[0]
                state[0]=state[action.index]
                state[action.index]=element
            }
            else{
                let element=state[action.index+1]
                state[action.index+1]=state[action.index]
                state[action.index]=element
            }
            return [...state]

        case 'MARK_ALL':
            if(state.length){
                state.filter((item)=>{
                    if(!item.complete){
                        item.complete=!item.complete
                    }
                    return item
                })
            }
            return [...state]
            
        case 'UNMARK_ALL':
            if(state.length){
                state.filter((item)=>{
                    if(item.complete){
                        item.complete=!item.complete
                    }
                    return item
                })
            }
            return[...state]

        case 'DELETE_ALL':
            state.splice(0,state.length)
            return [...state]

        default:
            return state
    }
}
export default appReducer