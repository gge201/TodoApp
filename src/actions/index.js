export const addTodo=text=>({
    type:'ADD_ITEM',
    text
})
export const deleteTodo=text=>({
    type:'DELETE_ITEM',
    text
})
export const editTodo=(text,updateText)=>({
    type:'EDIT_ITEM',
    text,
    updateText
})
export const toggleTodo=text=>({
    type:'TOGGLE_ITEM',
    text
})
export const upTodo=(text,index)=>({
    type:'MOVE_UP',
    text,
    index
})
export const downTodo=(text,index)=>({
    type:'MOVE_DOWN',
    text,
    index
})
export const deleteAllTodo = () =>({
    type:'DELETE_ALL'
})
export const markAllTodo = () =>({
    type:'MARK_ALL'
})
export const unmarkAllTodo = () =>({
    type:'UNMARK_ALL'
})