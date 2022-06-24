import "./App.css";

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const link = "www.google.com";
  const person = { fullName: "Sohaib Skious", age: 21 };

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>

        {/* <p>{console.log("234")}</p> */}
        {/* <p>{person}</p> */}
        <p>Random number : {Math.random() * 100}</p>
        <a href={link} > Google Site</a>

      </div>
    </div>
  );
}

export default App;
