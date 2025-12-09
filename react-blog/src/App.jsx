import { useState } from "react";
import Count from "./Count";
import Header from "./header"
import Props from "./Props";
import Okok from "./input";
import Checkbox from "./checkbox";
import Loops from "./Loops";
import Clock from "./Clock";
import Styling from "./Styling";
import Styled from "./Styled";
import Okokok from "./Okokok";
import Derived from "./Derived";
import Objupdate from "./Objupdate";
import Formcheck from "./Formcheck";
const callfun = () => {
  console.log("clicked outside");

  alert("Button clicked is outside");
};
function App() {
  // const callfun = () => {
  //   console.log("clicked inside");

  //   alert("Button clicked is inside");
  // };
  // const pri = () => {
  //   return "print function is called"
  // }

  // const [display , setDisplay] = useState(true)

  // let ob1 = {
  //   name : "ridham",
  //   age : 20
  // }

  // let ob2 = {
  //   name : "suraj",
  //   age : 22
  // }

  // let mail = "ridham@gmail.com"

  // let arr = [1,2,3]

  let [color, setcolor] = useState("white")
  
  const handlecolor = (e) => {
    console.log(e.target.value)
    setcolor(e.target.value)
  }

  return (
    <div>
      {/* <h1>Ridham Kakadiya Todos</h1>

      <img
        src="https://plus.unsplash.com/premium_photo-1677094766815-e0fe790e364a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image"
        height="300px"
      />

      <ul>
        <li>Hello</li>
        <li>Hiii</li>
        <li>How are you</li>
      </ul>

      <button onClick={() => callfun()}>CLick me</button>

      <h1>{pri()}</h1>

      <Count />

      <button onClick={()=>setDisplay(!display)}>Click to remove component </button>
      {
        display?<Header />:null
      }  */}
      {/* <Props ob={ob1} mail={mail} />
      <Props ob={ob2} />
      <Props ob={arr} /> */}
      {/* <Okok /> */}
      {/* <Checkbox /> */}
      {/* <Loops /> */}
      {/* <h2>Select colour of your clock </h2>
      <select name="color" onChange={handlecolor} id="color">
        <option value="white" id="white">
          white
        </option>
        <option value="yellow" id="yellow">
          Yellow
        </option>
        <option value="green" id="green">
          Green
        </option>
        <option value="red" id="red">
          Red
        </option> */}
      {/* </select> */}
      {/* <Clock color={color} /> */}
      {/* <Styling /> */}
      
      {/* <Styled /> */}

      {/* <Okokok /> */}

      {/* <Derived /> */}

      {/* <Objupdate /> */}

      <Formcheck />

    </div>
  );
}

export default App;
