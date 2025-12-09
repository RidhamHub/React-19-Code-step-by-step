function Okokok() {

    const handleForm = (e) => {
        e.preventDefault()
        const user = document.querySelector('#user').value; 
        const password = document.querySelector("#password").value; 
        console.log(user , password)
    };

    return (
        <div>
            <form action="" onSubmit={handleForm}>
                <input type="text" id="user" placeholder="Enter name" />
                <br/><br/>
                <input type="password" id="password" placeholder="Enter Password" /> <br/><br/>

                <button >Submit</button>

            </form>
        </div>
    )
}

export default Okokok;