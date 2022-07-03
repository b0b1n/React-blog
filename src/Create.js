import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Skious");

  const handleSubmit = (e) =>{
    e.preventDefault();
    const blog = {title , body , author}
    console.log(blog);

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
        <button>Add blog</button>
      </form>
    </div>
  );
};

export default Create;
