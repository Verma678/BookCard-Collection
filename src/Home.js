import { useState, useEffect } from "react";
import Card from "./Card";
import "./index.css";
import Loader from "./Loader";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function Home() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  function logOutHandler() {
    localStorage.removeItem("isLoggedIn");
    alert("Logged Out Successfully");
    navigate("/");
  }

  useEffect(() => {
    const poem = async () => {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/posts");
      const data = await response.json();
      setLoading(false);
      setPost(data.posts);
    };
    poem();
  }, []);
  return (
    <>
      <Navbar />
      <div className="book-container">
        {loading ? (
          <Loader />
        ) : (
          post.map((entity) => {
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
      <button onClick={logOutHandler} className="log-out-button">
        Log out
      </button>
    </>
  );
}

export default Home;
