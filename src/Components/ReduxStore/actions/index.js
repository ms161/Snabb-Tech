 const addUser=(data)=>{
    console.log(data)
    return {
        type:'addUser',
        payload:{
            id:new Date().getTime().toString(),
            data:data 
        }
    }
}
export default addUser
