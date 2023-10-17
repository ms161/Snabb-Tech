import React from "react";

import { useSelector } from "react-redux/es/hooks/useSelector";
const Table = (props) => {
  let data = useSelector((state) => state.detailsReducer);
  console.log(props.searchByName);
  console.log(props.filterByGender);
  if (props.searchByName) {
    data = data.filter((item) =>
      item.firstName.toLowerCase().includes(props.searchByName.toLowerCase())
    );
  }
 if(props.filterByGender && props.filterByGender!=='all'){
  data=data.filter((item)=>{
   return item.gender===props.filterByGender
  })
 }
 

  return (
    <>
      <div className="w-full py-4">
        <table className="min-w-full border border-gray-300 divide-y divide-gray-300">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs  text-gray-800 font-extrabold uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs  text-gray-800 font-extrabold uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs  text-gray-800 font-extrabold uppercase tracking-wider">
                Gender
              </th>
              <th className="px-6 py-3 text-left text-xs  text-gray-800 font-extrabold uppercase tracking-wider">
                Mobile No
              </th>
            </tr>
          </thead>
          { data.map((e)=>{
            
            return (
              
              <tbody className="bg-white divide-y divide-gray-300">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">{e.firstName }</td>
                <td className="px-6 py-4 whitespace-nowrap">{e.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{e.gender}</td>
                <td className="px-6 py-4 whitespace-nowrap">{e.mobile}</td>
              </tr>
            </tbody>
            )
          })

      
          }
        </table>
      </div>
    </>
  );
};

export default Table;
