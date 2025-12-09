import { useActionState } from "react";

function Formcheck() {
    
    const dataHandler = async (prevData , formData) => {
        let name = formData.get('name')
        let password = formData.get("password");

        await new Promise(res => setTimeout(res, 2000))
        
        if (name && password) {
            return {message : 'Data Submitted successfully' , name , password}
        } else {
            return {error:'enter both details '}
        }
    }

    const [data , action , pending] = useActionState(dataHandler , undefined)


    return (
      <div>
        <form action={action}>
          <input type="text" placeholder="Enter name" name="name" />
          <br />
          <br />
          <input type="password" placeholder="Enter Password" name="password" />
          <br />
          <br />

          <button disabled={pending}>Submit</button>
        </form>

        {data?.message && (
          <span style={{ color: "green" }}>Data Submitted</span>
        )}
        {data?.error && (
          <span style={{ color: "red" }}>Enter both data correctly</span>
        )} 
      </div>
    );
}

export default Formcheck