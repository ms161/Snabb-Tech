import React from "react";
import Input from "./Input";
const Table = () => {
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
          <tbody className="bg-white divide-y divide-gray-300">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap"></td>
              <td className="px-6 py-4 whitespace-nowrap"></td>
              <td className="px-6 py-4 whitespace-nowrap"></td>
              <td className="px-6 py-4 whitespace-nowrap"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
