import { useState } from "react"

function Objupdate() {
    
    const [data, setdata] = useState({
        name: "ridham",
        address: {
            city: "surat",
            state: "gujarat"
        }
    })

    const namehan = (value) => {
        data.name = value
        setdata({...data})
    }

    const cityhan = (value) => {
        data.address.city = value
        setdata({...data , address:{...data.address , city :value}})
    }

    return (
      <div>
        <input
          type="text"
          onChange={(event) => {
            namehan(event.target.value);
          }}
          placeholder="Enter name"
        />
        <input
          type="text"
          onChange={(event) => {
            cityhan(event.target.value);
          }}
          placeholder="Enter city"
        />

        <h2>name : {data.name} </h2>
        <h2>city : {data.address.city} </h2>
        <h2>state : {data.address.state} </h2>
      </div>
    );
}

export default Objupdate;