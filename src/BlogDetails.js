import { useParams } from "react-router-dom";
import FetchError from "./FetchError";
import Loading from "./Loading";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);
  return (
    <div className="blog-details">
      {isPending && <Loading />}
      {error && <FetchError error={` No blog with the id  : ${blog.id}`} />}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p> Written by {blog.author}</p>
          <div> {blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
