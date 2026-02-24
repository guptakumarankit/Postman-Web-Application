import React from "react";

const Headers = () => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="mt-3 text-bold">Headers</h1>
      <table className="w-[90%] text-sm text-left text-gray-500 border">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border">
          <tr className="">
            <th>key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody className="gap-3">
          <tr className="bg-white hover:bg-gray-50">
            <td>
              <input type="text" placeholder="Key " className="w-full pl-2" />
            </td>
            <td>
              <input type="text" placeholder="Value" className="w-full pl-2" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Headers;
