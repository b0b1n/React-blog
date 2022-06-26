import BlogList from "./BlogList";
import useFetch from "./useFetch";
import Loading from "./Loading";
import FetchError from "./FetchError";

const Home = () => {
  const {data : blogs, error, isPending} = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {error && <FetchError error={error}/>}
      {isPending && <Loading />}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div>
  );
};

export default Home;
