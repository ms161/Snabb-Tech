import React, { useState } from "react";

import { useDispatch } from "react-redux";
import ToCsv from "./ToCsv";
import Table from "./Table";

const SearchAndFilter = () => {
  const dispatch = useDispatch();
  const [search2, setSearch2] = useState("");
  const [gender,setGender]=useState('')
  const search = (e) => {
    
    setSearch2((prevData) => {
      return e.target.value;
    });
    console.log(search2);
  };
  //using this for handling async setSearch2
  //   useEffect(() => {
  //     console.log('useEffect running')
  //     dispatch(searchByName(search2));
  //   }, [dispatch, search2]);

  const dispatchFilter = () => {
   
  };
 const disFilter=(e)=>{
    setGender(e.target.value)
    
    console.log(e.target.value)
 }
  return (
    <>
      <div className="flex  gap-3 justify-evenly ml-20 mt-14 font-bold">
        <div className="flex flex-col gap-3">
          <input
            className="w-64 border text-center p-2 border-black rounded-2xl"
            type="text"
            placeholder="Search by Name"
            onChange={search}
          />
         
         
        </div>
        <div>Filter by Gender: 
          <select onChange={disFilter} className="border border-black p-2 px-4 rounded-2xl" name="" id="">
            <option value="all">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>
      <div>

      <ToCsv/>
      </div>
      <Table
      searchByName={search2}
      filterByGender={gender}
      />
    </>
  );
};

export default SearchAndFilter;
