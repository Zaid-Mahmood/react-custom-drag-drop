import React, { useState } from 'react'
const UpdateName = () => {
  const [name, setName] = useState(["Zaid", "Ali"]);
  const [checkNameStat, setCheckNameStat] = useState(false);
  const [nameVal, setNameVal] = useState('');
  const addNewNameFunc = () => {
    setCheckNameStat(!checkNameStat)
    if (nameVal) {
      setName((prev) => [...prev, nameVal])
      setNameVal("")
    }
  }

  const addNameFun = (value) => {
    setNameVal(value)
  }

  return (
    <div>
      <ul>
        {name.map((item, id) => (
          <li key={id}>
            {item}
            <br />
          </li>
        ))}
      </ul>

      <button style={{ marginBottom: "5px" }} onClick={addNewNameFunc}>Add new name</button>
      <br />
      {checkNameStat &&
        <input type='text' value={nameVal} onChange={(e) => { addNameFun(e.target.value) }} />
      }
    </div>
  )
}

export default UpdateName;
