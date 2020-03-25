export const loadState=()=>{
    const serializableState=localStorage.getItem('state')
    return JSON.parse(serializableState);
}
export const saveState=(state)=>{
    const serializableState=JSON.stringify(state)
    localStorage.setItem('state',serializableState)  
}