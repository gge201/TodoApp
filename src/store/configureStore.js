import {appReducer} from '../reducers/appReducer'
import {loadState} from '../localStorage'
import {createStore} from 'redux'
const persistedState=loadState();
console.log(persistedState);
export default ()=>{
    const store = createStore(appReducer,persistedState);
    return store;
}
