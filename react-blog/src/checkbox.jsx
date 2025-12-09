import { use, useState } from "react";

function Checkbox() {
  const [skill, setskill] = useState([]);

    const handleskills = (e) => {
        console.log(e.target.value, e.target.checked);
        if (e.target.checked) {
            setskill([...skill, e.target.value]);
        }
        else {
            setskill(skill.filter((item)=>item !== e.target.value));
        }
    }
  return (
    <div>
      <h3>select your skills </h3>
      <input type="checkbox" onChange={handleskills} id="php" value="php" />
      <label htmlFor="php">PHP</label>  

      <input type="checkbox" onChange={handleskills} id="java" value="java" />
      <label htmlFor="java">JAVA</label>

      <input
        type="checkbox"
        onChange={handleskills}
        id="python"
        value="python"
      />
      <label htmlFor="python">Python</label>

      <h1>{skill.toString()}</h1>
    </div>
  );
}

export default Checkbox;
