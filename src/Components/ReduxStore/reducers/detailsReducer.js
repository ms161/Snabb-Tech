const initialState = {
  data: [],
};

// const detailsReducer = (currentState = initialState, action) => {
//   if (action.type === "addUser") {
//     const { id, data } = action.payload;
//     return {
//       ...currentState,
//       data: [...currentState.data, {id:id,data:data}],
//     };
   
//   }
//   return currentState
// };

const initial=[]
const detailsReducer=(state=initial,action)=>{
    if(action.type==='addUser'){
        // console.log(action.payload.data)
      return [...state,action.payload.data]
    }
    return state

}
export default detailsReducer

