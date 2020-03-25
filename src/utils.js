console.log('utils.js is running')
export const square=(x)=> x*x ;
export const subtract=(a,b)=>a-b;
export{
    square,subtract as default
}