import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("b0b1n");
  const [age, setAge] = useState(21);


  const handleClick = () => {
    setName('Sohaib Skious')
    setAge(22)
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <h3>{name} is {age} years Old.</h3>
      <button onClick={handleClick}>Click me</button>
      <h3>{name}</h3>
    </div>
  );
};

export default Home;
