import React, { useState } from "react";
import Input from "./Input";
import { useDispatch } from "react-redux";
import addUser from "./ReduxStore/actions";
const MyForm = () => {


const dispatch=useDispatch()
const [formData, setFormData] = useState({
  firstName: '',
  email: '',
  gender: '',
  mobile:''
});
const addData=(e)=>{
  e.preventDefault()
  console.log('clicked')
  console.log(formData)
  dispatch(addUser(formData))
}

const handleInputChange = (e) => {
  const { name, value } = e.target;
  console.log(name)
  setFormData({ ...formData, [name]: value,  id:new Date().getTime().toString(), });
};


  

  return (
    <form onSubmit={addData} className="flex flex-col ">
      <Input
        type="text"
        value={formData.firstName}
        onChange={handleInputChange}
        placeholder="Enter your first name"
        name="firstName"
      />
      <Input
        type="text"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Enter your Email"
        name="email"
      />
      <Input
        type="text"
        value={formData.gender}
        onChange={handleInputChange}
        placeholder="Enter your Gender"
        name="gender"
      />
      <Input
        type="Number"
        value={formData.mobile}
        onChange={handleInputChange}
        placeholder="Enter your Mobile Number"
        name="mobile"
      />
      <button type="submit"  className=" mt-6 w-44 p-1 bg-blue-600 text-white m-auto rounded-lg  py-2">Submit</button>
    </form>
  );
};

export default MyForm;
