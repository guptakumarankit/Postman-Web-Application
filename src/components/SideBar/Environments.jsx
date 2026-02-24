import React, { useState } from 'react';

const Environments = () => {
  const [items, setItems] = useState([]);
  const [keyInput, setKeyInput] = useState('');
  const [valueInput, setValueInput] = useState('');

  const handleKeyChange = (e) => setKeyInput(e.target.value);
  const handleValueChange = (e) => setValueInput(e.target.value);

  const handleAdd = () => {
    if (keyInput.trim() === '' || valueInput.trim() === '') return;
    if (items.some(item => item.key === keyInput)) {
      alert('Key already exists!');
      return;
    }

    const newItem = { key: keyInput, value: valueInput };
    setItems([...items, newItem]);
    setKeyInput('');
    setValueInput('');
  };

  const deleteByKey = (keyToDelete) => {
    setItems(items.filter(item => item.key !== keyToDelete));
  };

  const handleDeleteByInputs = () => {
    if (items.some(item => item.key === keyInput)) {
      deleteByKey(keyInput);
      setKeyInput('');
      setValueInput('');
    } else {
      alert('Key not found for deletion!');
    }
  };

  return (
    <div className='p-1 flex flex-col gap-2'>
      <h2>Key-Value Pair </h2>
      <div className='flex flex-col gap-2'>
        <input
          className='outline-none border border-gray-400 rounded pl-1'
          type="text"
          placeholder="Enter Key"
          value={keyInput}
          required
          onChange={handleKeyChange}
        />

        <input
          className='outline-none border border-gray-400 rounded pl-1'
          type="text"
          placeholder="Enter Value"
          value={valueInput}
          required
          onChange={handleValueChange}
        />
       <div className='flex gap-4'>
         <button className='border p-1 bg-blue-300 rounded' onClick={handleAdd}>Add Item</button>
         <button  className='border p-1 bg-blue-300 rounded' onClick={handleDeleteByInputs}>Delete by Key</button>
       </div>
      </div>
    </div>
  );
};

export default Environments;

