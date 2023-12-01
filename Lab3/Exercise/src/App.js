import * as React from "react";
export default function App() {

  const [name, setName] = React.useState("Sy");
  const [age, setAge] = React.useState(21);

  return (
    <>
      <section>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>My name is {name} {'(not gay)'}</p>
      </section>
      <section>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <p>I am {age} years old</p>
      </section>
    </>
  );
}


