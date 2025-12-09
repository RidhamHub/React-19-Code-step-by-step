function Loops() {
  let users = [
    {
      id: 1,
      name: "Ridham",
      age: 20,
    },
    {
      id: 2,
      name: "Pinal",
      age: 22,
    },
    {
      id: 3,
      name: "Suraj",
      age: 23,
    },
    {
      id: 4,
      name: "Rishi",
      age: 21,
    },
  ];

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) =>(
            <tr key = {item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Loops;
