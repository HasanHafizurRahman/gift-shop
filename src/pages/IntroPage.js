import React from "react";

const IntroPage = ({ setPage }) => {
  return (
    <div>
      <h1>Welcome to Our Gift Shop</h1>
      <p>We offer wide selection of gifts for all occasions.</p>
      <button>Create Your Own Box</button>
      <button onClick={() => setPage((prev) => prev - 1)}>Prev</button>
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
    </div>
  );
};

export default IntroPage;
