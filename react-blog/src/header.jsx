import { useState } from "react";

function Header() {
  const [upp, setUpp] = useState(0);
  const setuppHandler = () => {
    setUpp(upp + 1);
  };

  const [down, setDown] = useState(10);
  const setdownHandler = () => {
    setDown(down - 1);
  };

  const [display, setDisplay] = useState(true);

    return (
      
    <div>
      <button onClick={() => setDisplay(!display)}>
        CLick to remove part of code
      </button>

      {display ? (
        <>
          <h1>up value : {upp}</h1>
          <button onClick={setuppHandler}>click to upp</button>
        </>
      ) : null}

      <h1>Down value : {down}</h1>
      <button onClick={setdownHandler}>click to Down</button>
    </div>
  );
}

export default Header;
