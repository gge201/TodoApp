import React from 'react'
import ReactDOM from 'react-dom'
import './styles/styles.css'
import {Provider} from 'react-redux'
import TodoApp from './components/TodoApp'
import appReducer from './reducers/appReducer'
import {createStore} from 'redux'
import {loadState,saveState} from './localStorage'
const persistedState=loadState();
const store=createStore(
        appReducer,persistedState);
store.subscribe(()=>{
        saveState(store.getState())
})
const jsx=(
        <Provider store={store}> 
            <TodoApp />
        </Provider>
);

 ReactDOM.render(jsx,document.getElementById('app')) 