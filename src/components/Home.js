import { useState, useEffect } from "react";
// import Card from "./Card";
import Card from "./Card";
import "../index.css";
import Loader from "./Loader";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import Pages from "./Pages";

function Home() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  const navigate = useNavigate();
  function logOutHandler() {
    localStorage.removeItem("isLoggedIn");
    alert("Logged Out Successfully");
    navigate("/");
  }

  useEffect(() => {
    const poem = async () => {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/posts?limit=0");
      const data = await response.json();
      setLoading(false);
      setPost(data.posts);
    };
    poem();
  }, []);

  const lastIndex = currentPage * postPerPage;
  const firstIndex = lastIndex - postPerPage;
  const slicedData = post.slice(firstIndex, lastIndex);
  return (
    <>
      <Navbar />
      <div className="book-container">
        {loading ? (
          <Loader />
        ) : (
          slicedData.map((entity) => {
            return (
              <div key={entity.id}>
                <Card
                  title={entity.title}
                  id={entity.id}
                  likes={entity.reactions.likes}
                  dislikes={entity.reactions.dislikes}
                  views={entity.views}
                  tags={entity.tags}
                />
              </div>
            );
          })
        )}
      </div>
      <Pages
        totalPost={post.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <button onClick={logOutHandler} className="log-out-button">
        Log out
      </button>
    </>
  );
}

export default Home;
