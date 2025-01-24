import React, { useState, useEffect } from "react";

const Pages = ({ totalPost, postPerPage, setCurrentPage, currentPage }) => {
  const lastPage = Math.ceil(totalPost / postPerPage);

  const [firstNum, setFirstNum] = useState(
    currentPage > 1 ? currentPage - 1 : 1
  );
  const [secondNum, setSecondNum] = useState(currentPage);
  const [thirdNum, setThirdNum] = useState(
    currentPage < lastPage ? currentPage + 1 : lastPage
  );
  useEffect(() => {
    if (currentPage === 1) {
      setFirstNum(1);
      setSecondNum(2);
      setThirdNum(3);
    } else if (currentPage === lastPage) {
      setFirstNum(lastPage - 2 > 0 ? lastPage - 2 : 1);
      setSecondNum(lastPage - 1);
      setThirdNum(lastPage);
    } else {
      setFirstNum(currentPage - 1);
      setSecondNum(currentPage);
      setThirdNum(currentPage + 1);
    }
  }, [currentPage, lastPage]);

  const handleClick = (page) => {
    if (page >= 1 && page <= lastPage) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="pagination">
      <button
        disabled={currentPage <= 1}
        onClick={() => handleClick(currentPage - 1)}
        className="button-style"
      >
        Prev
      </button>
      <button
        onClick={() => handleClick(firstNum)}
        className={`button-style ${
          currentPage === firstNum ? "highlight" : ""
        }`}
      >
        {firstNum}
      </button>
      <button
        onClick={() => handleClick(secondNum)}
        className={`button-style ${
          currentPage === secondNum ? "highlight" : ""
        }`}
      >
        {secondNum}
      </button>
      <button
        onClick={() => handleClick(thirdNum)}
        className={`button-style ${
          currentPage === thirdNum ? "highlight" : ""
        }`}
      >
        {thirdNum}
      </button>

      <div className="dots">...</div>
      <button
        disabled={currentPage >= lastPage}
        onClick={() => handleClick(currentPage + 1)}
        className="button-style"
      >
        Next
      </button>
    </div>
  );
};

export default Pages;
