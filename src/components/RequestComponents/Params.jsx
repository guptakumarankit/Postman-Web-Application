import React from 'react'

const Params = () => {
  return (
    <div>
      <h1 className='text-bold'>Query Params</h1>
      <table className='w-full text-sm text-left text-gray-500 border'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 border'>
          <tr className=''>
            <th>key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody className='gap-3'>
          <tr className='bg-white hover:bg-gray-50'>
            <td>
              <input 
              type="text" 
              placeholder='Key '
              className='w-full pl-2'/>
              </td>
            <td>
              <input 
              type="text" 
              placeholder='Value'
              className='w-full pl-2'/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Params