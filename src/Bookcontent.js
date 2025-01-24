import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Book_image from "./assets/book_img.jpg";
import Loader from "./Loader";
import "./index.css";

function Bookcontent() {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const poem = async () => {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/posts/${id}`);
      const data = await response.json();
      setLoading(false);
      setBook(data);
      console.log(data);
    };
    poem();
  }, [id]);

  console.log(book);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="book-info single-card">
          <button className="update-post-button">Edit Post</button>
          <img
            src={Book_image}
            alt="book_detail"
            min-height="250px"
            width="360px"
            className="cover-image"
          ></img>
          <div className="img-bottom">
            <b className="left-heading">Content: </b>
            {
              <span className="content">
                {book && book.body
                  ? book.body.substring(0, 250) + "..."
                  : "No content available"}
              </span>
            }
            <br></br>
            <div className="user-detail">
              <b className="user-detail">User Id :</b>
              {" " + book.userId}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Bookcontent;
