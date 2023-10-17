import React, { useState } from "react";
import Input from "./Input";

const MyForm = () => {
  const handleInputChange = (e) => {};

  return (
    <form className="flex flex-col ">
      <Input
        type="text"
        onChange={handleInputChange}
        placeholder="Enter your first name"
        name="firstName"
      />
      <Input
        type="text"
        onChange={handleInputChange}
        placeholder="Enter your Email"
        name="lastName"
      />
      <Input
        type="email"
        onChange={handleInputChange}
        placeholder="Enter your Gender"
        name="email"
      />
      <Input
        type="email"
        onChange={handleInputChange}
        placeholder="Enter your Mobile Number"
        name="email"
      />
    </form>
  );
};

export default MyForm;
