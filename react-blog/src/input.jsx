import { useState } from "react"

function Okok() {

    const [val, setval] = useState("")
    const [age , setage] = useState("")
    
    function clear() {
        setval("");
        setage("")
    }
    return (
      <div>
        <input
          type="text"
          value={val}
          onChange={(e) => {
            setval(e.target.value);
          }}
          placeholder="Enter your Details"
        />

        <input
          type="text"
          value={age}
          onChange={(e) => {
            setage  (e.target.value);
          }}
          placeholder="Enter your Details"
        />

            <h1>{val}</h1>
            <h1>{age}</h1>

        <button
          onClick={clear }
        >
          click to Clear{" "}
        </button>
      </div>
    );
}

export default Okok