import { useSelector } from "react-redux";

import React from "react";

const ToCsv = () => {
  let data2 = useSelector((state) => state.detailsReducer);
  const convertToCSV = (arr) => {
    const header = Object.keys(arr[0]).join(",");
    const rows = arr.map((obj) => Object.values(obj).join(","));
    return [header, ...rows].join("\n");
  };

  const downloadCSV = (csv, filename) => {
    const csvFile = new Blob([csv], { type: "text/csv" });

    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(csvFile, filename);
    } else {
      const downloadLink = document.createElement("a");
      downloadLink.download = filename;
      downloadLink.href = window.URL.createObjectURL(csvFile);
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  // Example usage
  const data = data2;
  const downloadFile = () => {
    console.log("fa");
    const csv = convertToCSV(data);
    downloadCSV(csv, "data.csv");
  };

  return (
    <div className="m-auto  flex ">
      <button
        className="bg-blue-700 rounded-lg text-white p-1 px-10 mt-8 text-center m-auto"
        onClick={downloadFile}
      >
        Download Csv file
      </button>
    </div>
  );
};
export default ToCsv;
