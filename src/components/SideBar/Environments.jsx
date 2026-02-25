import React, { useEffect, useState } from "react";

const Environments = () => {
  const [keyInput, setKeyInput] = useState("");
  const [valueInput, setValueInput] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("environment")) || {};
  }, []);

  const handleSave = () => {
    if (!keyInput.trim()) {
      return;
    }
    localStorage.setItem(
      "environment",
      JSON.stringify({ key: keyInput, value: valueInput }),
    );
    setKeyInput("");
    setValueInput("");
  };

  const handleDelete = () => {
    if (keyInput != "" && valueInput != "") {
      localStorage.removeItem("environment");
    }
    setKeyInput("");
    setValueInput("");
  };

  return (
    <div className=" mx-auto mt-6 p-1">
      <h3 className="font-semibold mb-3 text-center">Environment Variable</h3>
      <div className="flex gap-2 mb-2 items-center">
        <input
          type="text"
          placeholder="Key"
          value={keyInput}
          onChange={(e) => setKeyInput(e.target.value)}
          className="border p-2 w-1/2 rounded"
        />
        <input
          type="text"
          placeholder="Value"
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value)}
          className="border p-2 w-1/2 rounded"
        />
      </div>

      <div className="flex gap-2 mt-2 justify-center">
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save
        </button>

        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Environments;
