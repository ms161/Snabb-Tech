const initial = [];
const detailsReducer = (state = initial, action) => {
  if (action.type === "addUser") {
    // console.log(action.payload.data)
    return [...state, action.payload.data];
  } 
  return state;
};
export default detailsReducer;
