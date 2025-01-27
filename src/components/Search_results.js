import Book_image from "../assets/book_img.jpg";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

function Search_results() {
  const [postData, setPostData] = useState([]);
  const location = useLocation();
  const [page, setPage] = useState(1);
  const query = new URLSearchParams(location.search).get("query");
  console.log(query);
  useEffect(() => {
    async function handleInput() {
      const response = await fetch(
        `https://dummyjson.com/posts/search?q=${query}`
      );
      const data = await response.json();
      setPostData((prev) => [...prev, ...data.posts]);
    }
    handleInput();
  }, [query, page]);

  const handleScrolling = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrolling);

    return () => {
      window.removeEventListener("scroll", handleScrolling);
    };
  });
  return (
    <div className="search-result">
      <Navbar />
      {postData.map((book, index) => {
        return (
          <Link to={`/card/${book.id}`}>
            <div className="book-info" key={index}>
              <img
                src={Book_image}
                alt="book_detail"
                min-height="250px"
                width="360px"
                className="cover-image"
              ></img>
              <div className="img-bottom">
                <b className="left-heading">Content: </b>
                <span className="content">
                  {book.body
                    ? book.body.substring(0, 250) + "..."
                    : "No content available"}
                </span>
                <br />
                <div className="user-detail">
                  <b className="user-detail">User Id:</b> {book.userId}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Search_results;
