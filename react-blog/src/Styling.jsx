import { useState, useTransition } from "react";

const Styling = () => {
    
  const [pending, setPending] = useTransition(false)
  
  const btnhand = () => {
    
    setPending(async () => {
      await new Promise(res => setTimeout(res, 2000))
    })
  }

    const [cardStyle, setCardStyle] = useState({
      border: "2px solid black",
      width: "300px",
      padding: "10px"
    });
    
    const updateTheme = (gb , text) => {
        setCardStyle({...cardStyle , backgroundColor : gb , color : text})
    }

    return (
      <div>
        <h1>Hello , Welome to my Website</h1>
        <button onClick={() => updateTheme("gray", "green")}>Gray theam</button>
        <button onClick={() => updateTheme("white", "black")}>Default theam</button>
        <button disabled={pending} onClick={btnhand} >press to load the data</button>
        {
          pending ? <h3>Loading...</h3> : <h3>Data Loaded</h3>
        }

        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          <div style={cardStyle}>
            <img
              style={{ width: "100%" }}
              src="https://as1.ftcdn.net/v2/jpg/02/43/12/34/1000_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
              alt=""
            />
            <h2>Ridham Kakadiya</h2>
            <h3>Software Developer</h3>
          </div>
        </div>
      </div>
    );
}

export default Styling;