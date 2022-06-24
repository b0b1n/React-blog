const Home = () => {
  // const handleClick = ()=>{
  //     console.log("Hello Click");
  // }

  const handleClick = (name, e) => {
    console.log(`Hello,  ${name}`);
    console.log(e.target);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      {/* <button onClick={handleClick}>Click me</button> */}
      <button onClick={(e) => handleClick("Sohaib", e)}>Click me</button>
    </div>
  );
};

export default Home;
