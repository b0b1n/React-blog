import { useState } from "react";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Skious");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault();
    const blog = {title , body , author}
    setIsPending(true)
    
    fetch("http://localhost:8000/blogs", {
      method : "POST",
      headers : {"Content-type" : "application/json"},
      body : JSON.stringify(blog)
    }).then(()=>{
      console.log("Just added new blog");
      setIsPending(false)
    }).catch((er)=>{
      console.log("");
    })

  }

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title : </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog content : </label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Author : </label>
        <select value={author} onChange={(e) =>setAuthor(e.target.value)}>
          <option value="Sohaib">Sohaib</option>
          <option value="L'hiiba">L'hiiba</option>
        </select>
        {!isPending && <button>Add blog</button>}
        {isPending && <button disabled>Adding blog ...</button>}
      </form>
    </div>
  );
};

export default Create;
