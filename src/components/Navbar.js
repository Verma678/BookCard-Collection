import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  const handleQuery = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/search?query=${query}`);
    }
  };

  //   }

  return (
    <div className="search-header">
      <input
        type="text"
        onChange={(event) => setQuery(event.target.value)}
        placeholder="&#x1F50D; Search your post"
        className="input-box"
      ></input>
      <Link to={`/user/${query}`}>
        <button type="submit" onClick={handleQuery} className="submit-button">
          Search
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
